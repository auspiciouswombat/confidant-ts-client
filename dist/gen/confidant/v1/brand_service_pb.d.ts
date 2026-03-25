import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Brand } from "./brand_pb.js";
import type { SubscriptionSource, SubscriptionStatus } from "./common_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file confidant/v1/brand_service.proto.
 */
export declare const file_confidant_v1_brand_service: GenFile;
/**
 * @generated from message confidant.v1.ListBrandsRequest
 */
export type ListBrandsRequest = Message<"confidant.v1.ListBrandsRequest"> & {
    /**
     * @generated from field: int32 page_size = 1;
     */
    pageSize: number;
    /**
     * @generated from field: string page_token = 2;
     */
    pageToken: string;
    /**
     * @generated from field: confidant.v1.SubscriptionStatus status_filter = 3;
     */
    statusFilter: SubscriptionStatus;
};
/**
 * Describes the message confidant.v1.ListBrandsRequest.
 * Use `create(ListBrandsRequestSchema)` to create a new message.
 */
export declare const ListBrandsRequestSchema: GenMessage<ListBrandsRequest>;
/**
 * @generated from message confidant.v1.ListBrandsResponse
 */
export type ListBrandsResponse = Message<"confidant.v1.ListBrandsResponse"> & {
    /**
     * @generated from field: repeated confidant.v1.Brand brands = 1;
     */
    brands: Brand[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
};
/**
 * Describes the message confidant.v1.ListBrandsResponse.
 * Use `create(ListBrandsResponseSchema)` to create a new message.
 */
export declare const ListBrandsResponseSchema: GenMessage<ListBrandsResponse>;
/**
 * @generated from message confidant.v1.GetBrandRequest
 */
export type GetBrandRequest = Message<"confidant.v1.GetBrandRequest"> & {
    /**
     * @generated from field: string brand_id = 1;
     */
    brandId: string;
};
/**
 * Describes the message confidant.v1.GetBrandRequest.
 * Use `create(GetBrandRequestSchema)` to create a new message.
 */
export declare const GetBrandRequestSchema: GenMessage<GetBrandRequest>;
/**
 * @generated from message confidant.v1.GetBrandResponse
 */
export type GetBrandResponse = Message<"confidant.v1.GetBrandResponse"> & {
    /**
     * @generated from field: confidant.v1.Brand brand = 1;
     */
    brand?: Brand;
};
/**
 * Describes the message confidant.v1.GetBrandResponse.
 * Use `create(GetBrandResponseSchema)` to create a new message.
 */
export declare const GetBrandResponseSchema: GenMessage<GetBrandResponse>;
/**
 * @generated from message confidant.v1.FollowBrandRequest
 */
export type FollowBrandRequest = Message<"confidant.v1.FollowBrandRequest"> & {
    /**
     * @generated from field: string brand_id = 1;
     */
    brandId: string;
    /**
     * @generated from field: string brand_name = 2;
     */
    brandName: string;
    /**
     * @generated from field: confidant.v1.SubscriptionSource source = 3;
     */
    source: SubscriptionSource;
};
/**
 * Describes the message confidant.v1.FollowBrandRequest.
 * Use `create(FollowBrandRequestSchema)` to create a new message.
 */
export declare const FollowBrandRequestSchema: GenMessage<FollowBrandRequest>;
/**
 * @generated from message confidant.v1.FollowBrandResponse
 */
export type FollowBrandResponse = Message<"confidant.v1.FollowBrandResponse"> & {
    /**
     * @generated from field: confidant.v1.Brand brand = 1;
     */
    brand?: Brand;
};
/**
 * Describes the message confidant.v1.FollowBrandResponse.
 * Use `create(FollowBrandResponseSchema)` to create a new message.
 */
export declare const FollowBrandResponseSchema: GenMessage<FollowBrandResponse>;
/**
 * @generated from message confidant.v1.HideBrandRequest
 */
export type HideBrandRequest = Message<"confidant.v1.HideBrandRequest"> & {
    /**
     * @generated from field: string brand_id = 1;
     */
    brandId: string;
};
/**
 * Describes the message confidant.v1.HideBrandRequest.
 * Use `create(HideBrandRequestSchema)` to create a new message.
 */
export declare const HideBrandRequestSchema: GenMessage<HideBrandRequest>;
/**
 * @generated from message confidant.v1.HideBrandResponse
 */
export type HideBrandResponse = Message<"confidant.v1.HideBrandResponse"> & {};
/**
 * Describes the message confidant.v1.HideBrandResponse.
 * Use `create(HideBrandResponseSchema)` to create a new message.
 */
export declare const HideBrandResponseSchema: GenMessage<HideBrandResponse>;
/**
 * @generated from message confidant.v1.UnhideBrandRequest
 */
export type UnhideBrandRequest = Message<"confidant.v1.UnhideBrandRequest"> & {
    /**
     * @generated from field: string brand_id = 1;
     */
    brandId: string;
};
/**
 * Describes the message confidant.v1.UnhideBrandRequest.
 * Use `create(UnhideBrandRequestSchema)` to create a new message.
 */
export declare const UnhideBrandRequestSchema: GenMessage<UnhideBrandRequest>;
/**
 * @generated from message confidant.v1.UnhideBrandResponse
 */
export type UnhideBrandResponse = Message<"confidant.v1.UnhideBrandResponse"> & {
    /**
     * @generated from field: confidant.v1.Brand brand = 1;
     */
    brand?: Brand;
};
/**
 * Describes the message confidant.v1.UnhideBrandResponse.
 * Use `create(UnhideBrandResponseSchema)` to create a new message.
 */
export declare const UnhideBrandResponseSchema: GenMessage<UnhideBrandResponse>;
/**
 * @generated from service confidant.v1.BrandService
 */
export declare const BrandService: GenService<{
    /**
     * List brands the authenticated user follows, with summary stats.
     *
     * @generated from rpc confidant.v1.BrandService.ListBrands
     */
    listBrands: {
        methodKind: "unary";
        input: typeof ListBrandsRequestSchema;
        output: typeof ListBrandsResponseSchema;
    };
    /**
     * Get a single brand by ID.
     *
     * @generated from rpc confidant.v1.BrandService.GetBrand
     */
    getBrand: {
        methodKind: "unary";
        input: typeof GetBrandRequestSchema;
        output: typeof GetBrandResponseSchema;
    };
    /**
     * Follow a brand. Creates a subscription.
     *
     * @generated from rpc confidant.v1.BrandService.FollowBrand
     */
    followBrand: {
        methodKind: "unary";
        input: typeof FollowBrandRequestSchema;
        output: typeof FollowBrandResponseSchema;
    };
    /**
     * Hide a brand. Soft delete — preserves history, removes from feed.
     *
     * @generated from rpc confidant.v1.BrandService.HideBrand
     */
    hideBrand: {
        methodKind: "unary";
        input: typeof HideBrandRequestSchema;
        output: typeof HideBrandResponseSchema;
    };
    /**
     * Unhide a previously hidden brand.
     *
     * @generated from rpc confidant.v1.BrandService.UnhideBrand
     */
    unhideBrand: {
        methodKind: "unary";
        input: typeof UnhideBrandRequestSchema;
        output: typeof UnhideBrandResponseSchema;
    };
}>;
//# sourceMappingURL=brand_service_pb.d.ts.map