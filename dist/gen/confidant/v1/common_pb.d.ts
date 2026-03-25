import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file confidant/v1/common.proto.
 */
export declare const file_confidant_v1_common: GenFile;
/**
 * @generated from enum confidant.v1.CardType
 */
export declare enum CardType {
    /**
     * @generated from enum value: CARD_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CARD_TYPE_OFFER = 1;
     */
    OFFER = 1,
    /**
     * @generated from enum value: CARD_TYPE_PRODUCT_LAUNCH = 2;
     */
    PRODUCT_LAUNCH = 2,
    /**
     * @generated from enum value: CARD_TYPE_EVENT = 3;
     */
    EVENT = 3,
    /**
     * @generated from enum value: CARD_TYPE_ANNOUNCEMENT = 4;
     */
    ANNOUNCEMENT = 4,
    /**
     * @generated from enum value: CARD_TYPE_GENERAL = 5;
     */
    GENERAL = 5
}
/**
 * Describes the enum confidant.v1.CardType.
 */
export declare const CardTypeSchema: GenEnum<CardType>;
/**
 * @generated from enum confidant.v1.CardStatus
 */
export declare enum CardStatus {
    /**
     * @generated from enum value: CARD_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CARD_STATUS_ACTIVE = 1;
     */
    ACTIVE = 1,
    /**
     * @generated from enum value: CARD_STATUS_EXPIRED = 2;
     */
    EXPIRED = 2
}
/**
 * Describes the enum confidant.v1.CardStatus.
 */
export declare const CardStatusSchema: GenEnum<CardStatus>;
/**
 * @generated from enum confidant.v1.CardStatusFilter
 */
export declare enum CardStatusFilter {
    /**
     * @generated from enum value: CARD_STATUS_FILTER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CARD_STATUS_FILTER_ACTIVE = 1;
     */
    ACTIVE = 1,
    /**
     * @generated from enum value: CARD_STATUS_FILTER_EXPIRED = 2;
     */
    EXPIRED = 2,
    /**
     * @generated from enum value: CARD_STATUS_FILTER_ALL = 3;
     */
    ALL = 3
}
/**
 * Describes the enum confidant.v1.CardStatusFilter.
 */
export declare const CardStatusFilterSchema: GenEnum<CardStatusFilter>;
/**
 * @generated from enum confidant.v1.SeenFilter
 */
export declare enum SeenFilter {
    /**
     * @generated from enum value: SEEN_FILTER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SEEN_FILTER_UNSEEN_ONLY = 1;
     */
    UNSEEN_ONLY = 1,
    /**
     * @generated from enum value: SEEN_FILTER_SEEN_ONLY = 2;
     */
    SEEN_ONLY = 2,
    /**
     * @generated from enum value: SEEN_FILTER_ALL = 3;
     */
    ALL = 3
}
/**
 * Describes the enum confidant.v1.SeenFilter.
 */
export declare const SeenFilterSchema: GenEnum<SeenFilter>;
/**
 * @generated from enum confidant.v1.OfferType
 */
export declare enum OfferType {
    /**
     * @generated from enum value: OFFER_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: OFFER_TYPE_PERCENTAGE_OFF = 1;
     */
    PERCENTAGE_OFF = 1,
    /**
     * @generated from enum value: OFFER_TYPE_DOLLAR_OFF = 2;
     */
    DOLLAR_OFF = 2,
    /**
     * @generated from enum value: OFFER_TYPE_BOGO = 3;
     */
    BOGO = 3,
    /**
     * @generated from enum value: OFFER_TYPE_FREE_SHIPPING = 4;
     */
    FREE_SHIPPING = 4,
    /**
     * @generated from enum value: OFFER_TYPE_GIFT_WITH_PURCHASE = 5;
     */
    GIFT_WITH_PURCHASE = 5,
    /**
     * @generated from enum value: OFFER_TYPE_OTHER = 6;
     */
    OTHER = 6
}
/**
 * Describes the enum confidant.v1.OfferType.
 */
export declare const OfferTypeSchema: GenEnum<OfferType>;
/**
 * @generated from enum confidant.v1.ActivationMethod
 */
export declare enum ActivationMethod {
    /**
     * @generated from enum value: ACTIVATION_METHOD_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ACTIVATION_METHOD_PROMO_CODE = 1;
     */
    PROMO_CODE = 1,
    /**
     * @generated from enum value: ACTIVATION_METHOD_AUTO_APPLY_LINK = 2;
     */
    AUTO_APPLY_LINK = 2,
    /**
     * @generated from enum value: ACTIVATION_METHOD_IN_STORE = 3;
     */
    IN_STORE = 3,
    /**
     * @generated from enum value: ACTIVATION_METHOD_LOYALTY_REQUIRED = 4;
     */
    LOYALTY_REQUIRED = 4,
    /**
     * @generated from enum value: ACTIVATION_METHOD_NO_ACTION = 5;
     */
    NO_ACTION = 5
}
/**
 * Describes the enum confidant.v1.ActivationMethod.
 */
export declare const ActivationMethodSchema: GenEnum<ActivationMethod>;
/**
 * @generated from enum confidant.v1.SubscriptionStatus
 */
export declare enum SubscriptionStatus {
    /**
     * @generated from enum value: SUBSCRIPTION_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SUBSCRIPTION_STATUS_ACTIVE = 1;
     */
    ACTIVE = 1,
    /**
     * @generated from enum value: SUBSCRIPTION_STATUS_HIDDEN = 2;
     */
    HIDDEN = 2
}
/**
 * Describes the enum confidant.v1.SubscriptionStatus.
 */
export declare const SubscriptionStatusSchema: GenEnum<SubscriptionStatus>;
/**
 * @generated from enum confidant.v1.SubscriptionSource
 */
export declare enum SubscriptionSource {
    /**
     * @generated from enum value: SUBSCRIPTION_SOURCE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SUBSCRIPTION_SOURCE_FORWARDED_EMAIL = 1;
     */
    FORWARDED_EMAIL = 1,
    /**
     * @generated from enum value: SUBSCRIPTION_SOURCE_MANUAL_ADD = 2;
     */
    MANUAL_ADD = 2,
    /**
     * @generated from enum value: SUBSCRIPTION_SOURCE_DIRECT_SIGNUP = 3;
     */
    DIRECT_SIGNUP = 3
}
/**
 * Describes the enum confidant.v1.SubscriptionSource.
 */
export declare const SubscriptionSourceSchema: GenEnum<SubscriptionSource>;
/**
 * @generated from enum confidant.v1.CardSource
 */
export declare enum CardSource {
    /**
     * @generated from enum value: CARD_SOURCE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CARD_SOURCE_EMAIL = 1;
     */
    EMAIL = 1,
    /**
     * @generated from enum value: CARD_SOURCE_WEB = 2;
     */
    WEB = 2,
    /**
     * @generated from enum value: CARD_SOURCE_SMS = 3;
     */
    SMS = 3,
    /**
     * @generated from enum value: CARD_SOURCE_CREDIT_CARD = 4;
     */
    CREDIT_CARD = 4,
    /**
     * @generated from enum value: CARD_SOURCE_OTHER = 5;
     */
    OTHER = 5
}
/**
 * Describes the enum confidant.v1.CardSource.
 */
export declare const CardSourceSchema: GenEnum<CardSource>;
//# sourceMappingURL=common_pb.d.ts.map