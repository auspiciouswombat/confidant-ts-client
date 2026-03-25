#!/bin/bash
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Load config from .env.test
ENV_FILE="test/integration/.env.test"
if [ -f "$ENV_FILE" ]; then
  echo -e "${YELLOW}Loading config from ${ENV_FILE}...${NC}"
  set -a
  source "$ENV_FILE"
  set +a
else
  echo -e "${RED}Config file not found: ${ENV_FILE}${NC}"
  echo "   Copy test/integration/.env.test.example to test/integration/.env.test"
  echo "   and fill in the values."
  exit 1
fi

# Check if server is running
echo -e "${YELLOW}Checking if server is running...${NC}"
SERVER_CHECK_URL="${CONFIDANT_SERVER_URL/localhost/127.0.0.1}"
if ! curl -s --max-time 3 --connect-timeout 2 "${SERVER_CHECK_URL}/healthz" > /dev/null 2>&1; then
  echo -e "${RED}Server not running at ${CONFIDANT_SERVER_URL}${NC}"
  echo ""
  echo "   Start the server first (make dev-up in the server repo)"
  echo ""
  exit 1
fi
echo -e "${GREEN}Server is running at ${CONFIDANT_SERVER_URL}${NC}"
echo ""

# Get token from Supabase Auth
echo -e "${YELLOW}Authenticating via Supabase...${NC}"
if [ -z "${SUPABASE_URL}" ] || [ -z "${SUPABASE_ANON_KEY}" ]; then
  echo -e "${RED}SUPABASE_URL or SUPABASE_ANON_KEY not set${NC}"
  exit 1
fi

RESPONSE=$(curl -s -X POST "${SUPABASE_URL}/auth/v1/token?grant_type=password" \
  -H "apikey: ${SUPABASE_ANON_KEY}" \
  -H "Content-Type: application/json" \
  -d "$(jq -n --arg e "${TEST_USER_EMAIL}" --arg p "${TEST_USER_PASSWORD}" '{email:$e,password:$p}')")

if echo "$RESPONSE" | grep -q '"error"'; then
  ERROR_MSG=$(echo "$RESPONSE" | jq -r '.error_description // .error // "Unknown error"')
  echo -e "${RED}Supabase auth failed: ${ERROR_MSG}${NC}"
  echo ""
  echo "   Make sure the test user exists in Supabase."
  exit 1
fi

CONFIDANT_TEST_TOKEN=$(echo "$RESPONSE" | jq -r '.access_token')
if [ -z "$CONFIDANT_TEST_TOKEN" ] || [ "$CONFIDANT_TEST_TOKEN" = "null" ]; then
  echo -e "${RED}Failed to get access token from Supabase${NC}"
  echo "   Response: $RESPONSE"
  exit 1
fi
export CONFIDANT_TEST_TOKEN

CONFIDANT_TEST_USER_ID=$(echo "$RESPONSE" | jq -r '.user.id')
if [ -z "$CONFIDANT_TEST_USER_ID" ] || [ "$CONFIDANT_TEST_USER_ID" = "null" ]; then
  echo -e "${RED}Failed to extract user ID from Supabase response${NC}"
  exit 1
fi
export CONFIDANT_TEST_USER_ID

echo -e "${GREEN}Authenticated as ${TEST_USER_EMAIL}${NC}"

# Authenticate second user (optional)
if [ -n "${TEST_USER2_EMAIL}" ] && [ -n "${TEST_USER2_PASSWORD}" ]; then
  echo -e "${YELLOW}Authenticating second user...${NC}"
  RESPONSE2=$(curl -s -X POST "${SUPABASE_URL}/auth/v1/token?grant_type=password" \
    -H "apikey: ${SUPABASE_ANON_KEY}" \
    -H "Content-Type: application/json" \
    -d "$(jq -n --arg e "${TEST_USER2_EMAIL}" --arg p "${TEST_USER2_PASSWORD}" '{email:$e,password:$p}')")

  if ! echo "$RESPONSE2" | grep -q '"error"'; then
    CONFIDANT_TEST_TOKEN2=$(echo "$RESPONSE2" | jq -r '.access_token')
    CONFIDANT_TEST_USER2_ID=$(echo "$RESPONSE2" | jq -r '.user.id')
    if [ -n "$CONFIDANT_TEST_TOKEN2" ] && [ "$CONFIDANT_TEST_TOKEN2" != "null" ] && [ -n "$CONFIDANT_TEST_USER2_ID" ] && [ "$CONFIDANT_TEST_USER2_ID" != "null" ]; then
      export CONFIDANT_TEST_TOKEN2
      export CONFIDANT_TEST_USER2_ID
      echo -e "${GREEN}Authenticated user 2 as ${TEST_USER2_EMAIL}${NC}"
    else
      echo -e "${YELLOW}User 2 token/ID extraction failed (multi-user tests will be skipped)${NC}"
    fi
  else
    ERROR_MSG2=$(echo "$RESPONSE2" | jq -r '.error_description // .error // "Unknown error"')
    echo -e "${YELLOW}User 2 auth failed: ${ERROR_MSG2} (multi-user tests will be skipped)${NC}"
  fi
fi

echo ""
echo -e "${YELLOW}Test Configuration:${NC}"
echo "   Server:  ${CONFIDANT_SERVER_URL}"
echo "   Token:   ${CONFIDANT_TEST_TOKEN:0:20}..."
echo "   User ID: ${CONFIDANT_TEST_USER_ID}"
if [ -n "${CONFIDANT_TEST_TOKEN2}" ]; then
  echo "   User 2:  ${CONFIDANT_TEST_USER2_ID}"
fi
echo ""

# Run integration tests
echo -e "${YELLOW}Running integration tests...${NC}"
node --test test/integration/*.test.js "$@"
