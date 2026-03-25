// Client factory
export {
  type ConfidantClient,
  type ConfidantClientOptions,
  createConfidantClient,
} from "./client.js";

// Error helpers (DRC-105)
export { isNotFound, isUnauthenticated, isAlreadyExists, isPermissionDenied, isInvalidArgument } from "./errors.js";

// Proto domain types — re-export for consumer convenience
export * from "./gen/confidant/v1/brand_pb.js";
export * from "./gen/confidant/v1/card_pb.js";
export * from "./gen/confidant/v1/collection_pb.js";
export * from "./gen/confidant/v1/common_pb.js";
export * from "./gen/confidant/v1/email_pb.js";
export * from "./gen/confidant/v1/user_pb.js";

// Service definitions (for advanced usage — custom transports, etc.)
// Per DRC-103: named exports only for service files, no wildcards.
export { BrandService } from "./gen/confidant/v1/brand_service_pb.js";
export { CardService } from "./gen/confidant/v1/card_service_pb.js";
export { CollectionService } from "./gen/confidant/v1/collection_service_pb.js";
export { EmailService } from "./gen/confidant/v1/email_service_pb.js";
export { UserService } from "./gen/confidant/v1/user_service_pb.js";
