/**
 * Typed error discriminators for Confidant Connect RPC errors.
 *
 * Per DRC-105: the Expo app should use these helpers instead of
 * inspecting ConnectError.code directly.
 */

import { ConnectError, Code } from "@connectrpc/connect";

function hasCode(err: unknown, code: Code): boolean {
  return err instanceof ConnectError && err.code === code;
}

/** The requested resource was not found. */
export function isNotFound(err: unknown): boolean {
  return hasCode(err, Code.NotFound);
}

/** The request was not authenticated (missing or invalid token). */
export function isUnauthenticated(err: unknown): boolean {
  return hasCode(err, Code.Unauthenticated);
}

/** The resource already exists (e.g., duplicate intake address). */
export function isAlreadyExists(err: unknown): boolean {
  return hasCode(err, Code.AlreadyExists);
}

/** The caller does not have permission for this operation. */
export function isPermissionDenied(err: unknown): boolean {
  return hasCode(err, Code.PermissionDenied);
}

/** The request was malformed (e.g., missing required fields). */
export function isInvalidArgument(err: unknown): boolean {
  return hasCode(err, Code.InvalidArgument);
}
