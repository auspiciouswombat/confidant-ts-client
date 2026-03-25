# CLAUDE.md - Confidant TypeScript API Client

## Project Overview

Typed TypeScript client for the Confidant Connect RPC API. Consumed by the Expo/React Native app and any future web clients. Proto definitions come from `auspiciouswombat/confidant-proto`.

## Commands

### Build
```bash
make proto-sync   # Clone protos from confidant-proto
make codegen      # Generate TS stubs from protos
npm run build     # codegen + tsc
```

### Tests
```bash
npm test                        # Smoke tests (fast, no server needed)
make test-integration           # Integration tests (requires running server + .env.test)
```

### Code Quality
```bash
npm run lint                    # Biome check
npm run lint:fix                # Auto-fix
npm run format                  # Auto-format
```

### Proto Management
```bash
make proto-sync                 # Sync latest protos
make proto-check                # Check if local proto is behind remote
PROTO_REF=v1.0.0 make proto-sync  # Pin to specific tag/branch
```

## Pre-Commit Checklist

1. Run `npm test` — all smoke tests pass
2. Run `npm run lint`
3. Every feature/bug fix MUST include new or updated tests
4. Proto changes MUST include integration tests in `test/integration/`

## Architecture

### Repo Structure
```
src/
  client.ts       # Client factory (createConfidantClient)
  index.ts        # Public API surface — re-exports types and client
  gen/            # Generated proto stubs (from buf generate)
test/
  smoke.test.js   # Fast offline tests (client shape, exports)
  integration/    # Server integration tests (require running server)
```

### Three-Repo Chain

| Repo | Role |
|-|-|
| `confidant` (Go server) | Backend — consumes protos for handlers |
| `confidant-proto` | Source of truth for proto definitions |
| `confidant-ts-client` | This repo — typed client for Expo/web |

Proto flows: `confidant-proto` → `make proto-sync` → generate → commit.

### Package Consumption

The Expo app installs this package via git:
```json
"@confidant/api-client": "github:auspiciouswombat/confidant-ts-client"
```

`dist/` is committed so consumers don't need buf or protoc toolchains.

## Design Rule Checks (DRCs)

### DRC-100: Proto Types Stay in the Client Package

The Expo app imports domain types (`Brand`, `Card`, etc.) from `@confidant/api-client`. It MUST NOT import directly from `@bufbuild/protobuf`, `@connectrpc/connect`, or generated `*_pb.js` paths. If a proto type is needed in app code, re-export it from `index.ts`.

**Why:** Decouples the app from proto generation details. If we change code generators or proto structure, only this package changes.

**Check:** App imports must come from `@confidant/api-client`, never from `@confidant/api-client/dist/gen/*`.

### DRC-101: Auth Token Ownership Lives in the App

The client exposes `setToken(token)`. The app calls it after sign-in or token refresh. The client MUST NOT hold refresh logic, SecureStore access, or session state.

**Why:** Token lifecycle is platform-specific (Expo SecureStore, web localStorage). The client is transport-only.

**Check:** `client.ts` must not import any auth/storage libraries. Token comes in via options or `setToken()`.

### DRC-102: Retry and Cache Policy Live in the Client

Retry with exponential backoff on transient errors, request deduplication, and timeout defaults are client-level interceptors. The app MUST NOT wrap client calls in its own retry loops.

**Why:** Prevents duplicate retry stacks, inconsistent backoff, and retry storms.

**Check:** App code calling client methods should not be wrapped in try/catch/retry. Error handling in the app should be for UI decisions only.

### DRC-103: Explicit Re-Exports Only

`index.ts` MUST explicitly re-export stable domain types. Do not use `export * from "*_pb.js"` for internal-only types like `ServiceDesc`, raw request/response schemas, or codec details.

**Why:** Wildcard re-exports make every generated type part of the public API. Proto regeneration can break consumers if internal types change.

**Check:** `index.ts` should not have `export *` for service definition files. Service descriptors are re-exported individually for advanced usage.

### DRC-104: App Never Constructs Proto Messages Directly

App code should call client methods with plain objects. The client assembles proto messages internally. The app MUST NOT import `create()` from `@bufbuild/protobuf` or construct `*Schema` messages.

**Why:** Proto message construction is a client-internal concern. Plain objects provide a stable contract.

**Check:** App code should pass `{ brandId: "..." }` not `create(GetBrandRequestSchema, { brandId: "..." })`.

### DRC-105: Typed Error Discriminators for the App

The client should expose typed error helpers (`isNotFound`, `isUnauthenticated`, `isAlreadyExists`) so the app never inspects `ConnectError.code` directly.

**Why:** Error code interpretation is a client concern. The app should make UI decisions based on semantic helpers.

**Check:** App code should not import `Code` from `@connectrpc/connect` or check `.code === Code.NotFound`.

### DRC-106: Integration Tests Must Hit Real Server

Integration tests in `test/integration/` MUST hit a real Confidant server. No mocking of transport or service stubs in integration tests — that's what smoke tests are for.

**Why:** Catches wire-format, auth, and serialization issues that mocks miss.

**Check:** Integration test files import from `./helpers.js` which creates real clients against `CONFIDANT_SERVER_URL`.

### DRC-107: User Data Isolation in Integration Tests

Multi-user integration tests MUST verify that user A's data is not visible to user B. This mirrors DRC-082 on the server.

**Why:** Cross-user data leakage is a security bug. The client test suite is the last line of defense before the Expo app.

**Check:** Tests using `getTestClient2()` must assert that user 2 cannot see user 1's data.

### DRC-108: ConnectRPC Fetch Transport for React Native

The client MUST use `createConnectTransport` (fetch-based) from `@connectrpc/connect-web`. Do NOT use Node.js `http`/`http2` transports. React Native provides a global `fetch` that the Connect transport uses.

**Why:** Node transports don't work in React Native. The fetch transport is universally compatible.

**Check:** `client.ts` imports from `@connectrpc/connect-web`, not `@connectrpc/connect-node`.

## When to STOP and Ask

- Breaking changes to the `ConfidantClient` interface
- Adding new dependencies (bundle size matters for Expo)
- Modifying proto definitions (requires coordinated server + proto repo changes)
- Changing the auth interceptor pattern

## Git Workflow

`main` should be treated as protected. Always work on feature branches:

1. `git checkout -b feature/description`
2. Make changes, commit
3. `git push -u origin feature/description`
4. `gh pr create --title "..." --body "..."`
5. **Self-review**: run `/pr-review-toolkit:review-pr`, fix all findings, push fixes. Only report the PR as ready after self-review passes.

## PR Review (REQUIRED)

Every PR MUST be reviewed with `/pr-review-toolkit:review-pr` before reporting it as ready. This is not optional — run it automatically after creating the PR. Fix all Critical and Important findings before asking for human review.

## Implementation Planning

| Model | Use For |
|-|-|
| `haiku` | File searches, grep, boilerplate |
| `sonnet` | Most implementation, code review, tests |
| `opus` | Architecture decisions, ambiguous requirements |

**Tables:** minimum separator (`|-|-|`). Box-drawing characters (`┌─│└┘├┤┼`) completely banned.
