import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { DiscoveredBrand } from "./email_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file confidant/v1/email_service.proto.
 */
export declare const file_confidant_v1_email_service: GenFile;
/**
 * @generated from message confidant.v1.GetInboundAddressRequest
 */
export type GetInboundAddressRequest = Message<"confidant.v1.GetInboundAddressRequest"> & {};
/**
 * Describes the message confidant.v1.GetInboundAddressRequest.
 * Use `create(GetInboundAddressRequestSchema)` to create a new message.
 */
export declare const GetInboundAddressRequestSchema: GenMessage<GetInboundAddressRequest>;
/**
 * @generated from message confidant.v1.GetInboundAddressResponse
 */
export type GetInboundAddressResponse = Message<"confidant.v1.GetInboundAddressResponse"> & {
    /**
     * @generated from field: string email_address = 1;
     */
    emailAddress: string;
};
/**
 * Describes the message confidant.v1.GetInboundAddressResponse.
 * Use `create(GetInboundAddressResponseSchema)` to create a new message.
 */
export declare const GetInboundAddressResponseSchema: GenMessage<GetInboundAddressResponse>;
/**
 * @generated from message confidant.v1.ListDiscoveredBrandsRequest
 */
export type ListDiscoveredBrandsRequest = Message<"confidant.v1.ListDiscoveredBrandsRequest"> & {
    /**
     * @generated from field: int32 page_size = 1;
     */
    pageSize: number;
    /**
     * @generated from field: string page_token = 2;
     */
    pageToken: string;
};
/**
 * Describes the message confidant.v1.ListDiscoveredBrandsRequest.
 * Use `create(ListDiscoveredBrandsRequestSchema)` to create a new message.
 */
export declare const ListDiscoveredBrandsRequestSchema: GenMessage<ListDiscoveredBrandsRequest>;
/**
 * @generated from message confidant.v1.ListDiscoveredBrandsResponse
 */
export type ListDiscoveredBrandsResponse = Message<"confidant.v1.ListDiscoveredBrandsResponse"> & {
    /**
     * @generated from field: repeated confidant.v1.DiscoveredBrand brands = 1;
     */
    brands: DiscoveredBrand[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
};
/**
 * Describes the message confidant.v1.ListDiscoveredBrandsResponse.
 * Use `create(ListDiscoveredBrandsResponseSchema)` to create a new message.
 */
export declare const ListDiscoveredBrandsResponseSchema: GenMessage<ListDiscoveredBrandsResponse>;
/**
 * @generated from service confidant.v1.EmailService
 */
export declare const EmailService: GenService<{
    /**
     * Get the authenticated user's unique inbound email address.
     *
     * @generated from rpc confidant.v1.EmailService.GetInboundAddress
     */
    getInboundAddress: {
        methodKind: "unary";
        input: typeof GetInboundAddressRequestSchema;
        output: typeof GetInboundAddressResponseSchema;
    };
    /**
     * List senders found in user-forwarded emails that aren't yet matched to a followed brand.
     *
     * @generated from rpc confidant.v1.EmailService.ListDiscoveredBrands
     */
    listDiscoveredBrands: {
        methodKind: "unary";
        input: typeof ListDiscoveredBrandsRequestSchema;
        output: typeof ListDiscoveredBrandsResponseSchema;
    };
}>;
//# sourceMappingURL=email_service_pb.d.ts.map