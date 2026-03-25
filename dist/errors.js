/**
 * Typed error discriminators for Confidant Connect RPC errors.
 *
 * Per DRC-105: the Expo app should use these helpers instead of
 * inspecting ConnectError.code directly.
 */
import { ConnectError, Code } from "@connectrpc/connect";
function hasCode(err, code) {
    return err instanceof ConnectError && err.code === code;
}
/** The requested resource was not found. */
export function isNotFound(err) {
    return hasCode(err, Code.NotFound);
}
/** The request was not authenticated (missing or invalid token). */
export function isUnauthenticated(err) {
    return hasCode(err, Code.Unauthenticated);
}
/** The resource already exists (e.g., duplicate intake address). */
export function isAlreadyExists(err) {
    return hasCode(err, Code.AlreadyExists);
}
/** The caller does not have permission for this operation. */
export function isPermissionDenied(err) {
    return hasCode(err, Code.PermissionDenied);
}
/** The request was malformed (e.g., missing required fields). */
export function isInvalidArgument(err) {
    return hasCode(err, Code.InvalidArgument);
}
//# sourceMappingURL=errors.js.map