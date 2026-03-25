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

import { type Client, createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

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
export function createConfidantClient(
  baseUrl: string,
  options: ConfidantClientOptions = {},
): ConfidantClient {
  let currentToken = options.token;

  const transport = createConnectTransport({
    baseUrl,
    interceptors: [
      (next) => async (req) => {
        if (currentToken) {
          req.header.set("Authorization", `Bearer ${currentToken}`);
        }
        if (options.headers) {
          for (const [key, value] of Object.entries(options.headers)) {
            req.header.set(key, value);
          }
        }
        return next(req);
      },
    ],
  });

  return {
    brand: createClient(BrandService, transport),
    card: createClient(CardService, transport),
    collection: createClient(CollectionService, transport),
    email: createClient(EmailService, transport),
    user: createClient(UserService, transport),
    setToken(token: string) {
      currentToken = token;
    },
  };
}
