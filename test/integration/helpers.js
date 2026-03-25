/**
 * Integration test helpers.
 *
 * Reads config from environment variables set by bin/run-integration-tests.sh.
 */

import { createConfidantClient } from "../../dist/index.js";

/**
 * Returns the server URL from env or throws.
 */
export function getServerUrl() {
  const url = process.env.CONFIDANT_SERVER_URL;
  if (!url) throw new Error("CONFIDANT_SERVER_URL not set — run via bin/run-integration-tests.sh");
  return url;
}

/**
 * Returns an authenticated client for the primary test user.
 */
export function getTestClient() {
  const url = getServerUrl();
  const token = process.env.CONFIDANT_TEST_TOKEN;
  if (!token) throw new Error("CONFIDANT_TEST_TOKEN not set — run via bin/run-integration-tests.sh");
  return createConfidantClient(url, { token });
}

/**
 * Returns an authenticated client for the second test user, or null if not configured.
 */
export function getTestClient2() {
  const url = getServerUrl();
  const token = process.env.CONFIDANT_TEST_TOKEN2;
  if (!token) return null;
  return createConfidantClient(url, { token });
}

/**
 * Returns the primary test user's Supabase ID.
 */
export function getTestUserId() {
  const id = process.env.CONFIDANT_TEST_USER_ID;
  if (!id) throw new Error("CONFIDANT_TEST_USER_ID not set");
  return id;
}
