import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Card } from "./card_pb.js";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file confidant/v1/collection.proto.
 */
export declare const file_confidant_v1_collection: GenFile;
/**
 * @generated from message confidant.v1.Collection
 */
export type Collection = Message<"confidant.v1.Collection"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: int32 card_count = 4;
     */
    cardCount: number;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 6;
     */
    updatedAt?: Timestamp;
};
/**
 * Describes the message confidant.v1.Collection.
 * Use `create(CollectionSchema)` to create a new message.
 */
export declare const CollectionSchema: GenMessage<Collection>;
/**
 * @generated from message confidant.v1.CollectionCard
 */
export type CollectionCard = Message<"confidant.v1.CollectionCard"> & {
    /**
     * @generated from field: confidant.v1.Card card = 1;
     */
    card?: Card;
    /**
     * @generated from field: string note = 2;
     */
    note: string;
    /**
     * @generated from field: google.protobuf.Timestamp added_at = 3;
     */
    addedAt?: Timestamp;
};
/**
 * Describes the message confidant.v1.CollectionCard.
 * Use `create(CollectionCardSchema)` to create a new message.
 */
export declare const CollectionCardSchema: GenMessage<CollectionCard>;
//# sourceMappingURL=collection_pb.d.ts.map