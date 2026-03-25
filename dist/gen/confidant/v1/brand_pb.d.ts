import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file confidant/v1/brand.proto.
 */
export declare const file_confidant_v1_brand: GenFile;
/**
 * @generated from message confidant.v1.Brand
 */
export type Brand = Message<"confidant.v1.Brand"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string slug = 3;
     */
    slug: string;
    /**
     * @generated from field: repeated string tags = 4;
     */
    tags: string[];
    /**
     * @generated from field: string logo_url = 5;
     */
    logoUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 6;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: confidant.v1.BrandStats stats = 7;
     */
    stats?: BrandStats;
};
/**
 * Describes the message confidant.v1.Brand.
 * Use `create(BrandSchema)` to create a new message.
 */
export declare const BrandSchema: GenMessage<Brand>;
/**
 * @generated from message confidant.v1.BrandStats
 */
export type BrandStats = Message<"confidant.v1.BrandStats"> & {
    /**
     * @generated from field: int32 total_card_count = 1;
     */
    totalCardCount: number;
    /**
     * @generated from field: int32 active_offer_count = 2;
     */
    activeOfferCount: number;
    /**
     * @generated from field: double best_current_discount = 3;
     */
    bestCurrentDiscount: number;
    /**
     * @generated from field: google.protobuf.Timestamp last_card_at = 4;
     */
    lastCardAt?: Timestamp;
};
/**
 * Describes the message confidant.v1.BrandStats.
 * Use `create(BrandStatsSchema)` to create a new message.
 */
export declare const BrandStatsSchema: GenMessage<BrandStats>;
/**
 * @generated from message confidant.v1.BrandSummary
 */
export type BrandSummary = Message<"confidant.v1.BrandSummary"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string slug = 3;
     */
    slug: string;
    /**
     * @generated from field: string logo_url = 4;
     */
    logoUrl: string;
};
/**
 * Describes the message confidant.v1.BrandSummary.
 * Use `create(BrandSummarySchema)` to create a new message.
 */
export declare const BrandSummarySchema: GenMessage<BrandSummary>;
//# sourceMappingURL=brand_pb.d.ts.map