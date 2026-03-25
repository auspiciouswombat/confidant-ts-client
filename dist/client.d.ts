/**
 * Confidant API Client
 *
 * Typed TypeScript client for the Confidant Connect RPC API.
 * Generated service definitions + convenience wrapper.
 *
 * Usage:
 *   import { createConfidantClient } from '@confidant/api-client';
 *   const client = createConfidantClient('http://localhost:8080', { token: 'user-jwt' });
 *   const { brands } = await client.brand.listBrands({});
 */
import { type Client } from "@connectrpc/connect";
import { BrandService } from "./gen/confidant/v1/brand_service_pb.js";
import { CardService } from "./gen/confidant/v1/card_service_pb.js";
import { CollectionService } from "./gen/confidant/v1/collection_service_pb.js";
import { EmailService } from "./gen/confidant/v1/email_service_pb.js";
import { UserService } from "./gen/confidant/v1/user_service_pb.js";
export interface ConfidantClientOptions {
    /** JWT token for authentication */
    token?: string;
    /** Custom headers to include with every request */
    headers?: Record<string, string>;
}
export interface ConfidantClient {
    brand: Client<typeof BrandService>;
    card: Client<typeof CardService>;
    collection: Client<typeof CollectionService>;
    email: Client<typeof EmailService>;
    user: Client<typeof UserService>;
    /** Update the auth token (e.g., after refresh) */
    setToken: (token: string) => void;
}
/**
 * Create a typed Confidant API client.
 *
 * @param baseUrl - The server URL, e.g. "http://localhost:8080"
 * @param options - Auth token and custom headers
 */
export declare function createConfidantClient(baseUrl: string, options?: ConfidantClientOptions): ConfidantClient;
//# sourceMappingURL=client.d.ts.map