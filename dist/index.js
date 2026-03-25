// Client factory
export { createConfidantClient, } from "./client.js";
export * from "./gen/confidant/v1/brand_pb.js";
export * from "./gen/confidant/v1/brand_service_pb.js";
// Service definitions (for advanced usage — custom transports, etc.)
export { BrandService } from "./gen/confidant/v1/brand_service_pb.js";
export * from "./gen/confidant/v1/card_pb.js";
export * from "./gen/confidant/v1/card_service_pb.js";
export { CardService } from "./gen/confidant/v1/card_service_pb.js";
export * from "./gen/confidant/v1/collection_pb.js";
export * from "./gen/confidant/v1/collection_service_pb.js";
export { CollectionService } from "./gen/confidant/v1/collection_service_pb.js";
// Proto message types — re-export for consumer convenience
export * from "./gen/confidant/v1/common_pb.js";
export * from "./gen/confidant/v1/email_pb.js";
export * from "./gen/confidant/v1/email_service_pb.js";
export { EmailService } from "./gen/confidant/v1/email_service_pb.js";
//# sourceMappingURL=index.js.map