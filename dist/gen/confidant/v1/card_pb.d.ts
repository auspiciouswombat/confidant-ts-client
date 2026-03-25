import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { BrandSummary } from "./brand_pb.js";
import type { ActivationMethod, CardSource, CardStatus, CardType, OfferType } from "./common_pb.js";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file confidant/v1/card.proto.
 */
export declare const file_confidant_v1_card: GenFile;
/**
 * @generated from message confidant.v1.Card
 */
export type Card = Message<"confidant.v1.Card"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string brand_id = 2;
     */
    brandId: string;
    /**
     * @generated from field: confidant.v1.CardType card_type = 3;
     */
    cardType: CardType;
    /**
     * @generated from field: string title = 4;
     */
    title: string;
    /**
     * @generated from field: string summary = 5;
     */
    summary: string;
    /**
     * @generated from field: string image_url = 6;
     */
    imageUrl: string;
    /**
     * @generated from field: string action_url = 7;
     */
    actionUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp valid_from = 8;
     */
    validFrom?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp valid_until = 9;
     */
    validUntil?: Timestamp;
    /**
     * @generated from field: confidant.v1.CardStatus status = 10;
     */
    status: CardStatus;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 11;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: confidant.v1.OfferDetails offer_details = 12;
     */
    offerDetails?: OfferDetails;
    /**
     * @generated from field: confidant.v1.UserCardState user_state = 13;
     */
    userState?: UserCardState;
    /**
     * @generated from field: confidant.v1.BrandSummary brand = 14;
     */
    brand?: BrandSummary;
    /**
     * @generated from field: confidant.v1.CardSource source = 15;
     */
    source: CardSource;
};
/**
 * Describes the message confidant.v1.Card.
 * Use `create(CardSchema)` to create a new message.
 */
export declare const CardSchema: GenMessage<Card>;
/**
 * @generated from message confidant.v1.OfferDetails
 */
export type OfferDetails = Message<"confidant.v1.OfferDetails"> & {
    /**
     * @generated from field: confidant.v1.OfferType offer_type = 1;
     */
    offerType: OfferType;
    /**
     * @generated from field: double discount_value = 2;
     */
    discountValue: number;
    /**
     * @generated from field: string applies_to = 3;
     */
    appliesTo: string;
    /**
     * @generated from field: confidant.v1.ActivationMethod activation_method = 4;
     */
    activationMethod: ActivationMethod;
    /**
     * @generated from field: string promo_code = 5;
     */
    promoCode: string;
    /**
     * @generated from field: string conditions = 6;
     */
    conditions: string;
    /**
     * @generated from field: optional double original_price = 7;
     */
    originalPrice?: number;
    /**
     * @generated from field: optional double sale_price = 8;
     */
    salePrice?: number;
};
/**
 * Describes the message confidant.v1.OfferDetails.
 * Use `create(OfferDetailsSchema)` to create a new message.
 */
export declare const OfferDetailsSchema: GenMessage<OfferDetails>;
/**
 * @generated from message confidant.v1.UserCardState
 */
export type UserCardState = Message<"confidant.v1.UserCardState"> & {
    /**
     * @generated from field: google.protobuf.Timestamp seen_at = 1;
     */
    seenAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp dismissed_at = 2;
     */
    dismissedAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp saved_at = 3;
     */
    savedAt?: Timestamp;
    /**
     * @generated from field: string note = 4;
     */
    note: string;
};
/**
 * Describes the message confidant.v1.UserCardState.
 * Use `create(UserCardStateSchema)` to create a new message.
 */
export declare const UserCardStateSchema: GenMessage<UserCardState>;
//# sourceMappingURL=card_pb.d.ts.map