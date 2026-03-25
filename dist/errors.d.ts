/**
 * Typed error discriminators for Confidant Connect RPC errors.
 *
 * Per DRC-105: the Expo app should use these helpers instead of
 * inspecting ConnectError.code directly.
 */
/** The requested resource was not found. */
export declare function isNotFound(err: unknown): boolean;
/** The request was not authenticated (missing or invalid token). */
export declare function isUnauthenticated(err: unknown): boolean;
/** The resource already exists (e.g., duplicate intake address). */
export declare function isAlreadyExists(err: unknown): boolean;
/** The caller does not have permission for this operation. */
export declare function isPermissionDenied(err: unknown): boolean;
/** The request was malformed (e.g., missing required fields). */
export declare function isInvalidArgument(err: unknown): boolean;
//# sourceMappingURL=errors.d.ts.map