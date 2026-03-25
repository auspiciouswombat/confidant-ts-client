import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Collection, CollectionCard } from "./collection_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file confidant/v1/collection_service.proto.
 */
export declare const file_confidant_v1_collection_service: GenFile;
/**
 * @generated from message confidant.v1.ListCollectionsRequest
 */
export type ListCollectionsRequest = Message<"confidant.v1.ListCollectionsRequest"> & {
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
 * Describes the message confidant.v1.ListCollectionsRequest.
 * Use `create(ListCollectionsRequestSchema)` to create a new message.
 */
export declare const ListCollectionsRequestSchema: GenMessage<ListCollectionsRequest>;
/**
 * @generated from message confidant.v1.ListCollectionsResponse
 */
export type ListCollectionsResponse = Message<"confidant.v1.ListCollectionsResponse"> & {
    /**
     * @generated from field: repeated confidant.v1.Collection collections = 1;
     */
    collections: Collection[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
};
/**
 * Describes the message confidant.v1.ListCollectionsResponse.
 * Use `create(ListCollectionsResponseSchema)` to create a new message.
 */
export declare const ListCollectionsResponseSchema: GenMessage<ListCollectionsResponse>;
/**
 * @generated from message confidant.v1.CreateCollectionRequest
 */
export type CreateCollectionRequest = Message<"confidant.v1.CreateCollectionRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
};
/**
 * Describes the message confidant.v1.CreateCollectionRequest.
 * Use `create(CreateCollectionRequestSchema)` to create a new message.
 */
export declare const CreateCollectionRequestSchema: GenMessage<CreateCollectionRequest>;
/**
 * @generated from message confidant.v1.CreateCollectionResponse
 */
export type CreateCollectionResponse = Message<"confidant.v1.CreateCollectionResponse"> & {
    /**
     * @generated from field: confidant.v1.Collection collection = 1;
     */
    collection?: Collection;
};
/**
 * Describes the message confidant.v1.CreateCollectionResponse.
 * Use `create(CreateCollectionResponseSchema)` to create a new message.
 */
export declare const CreateCollectionResponseSchema: GenMessage<CreateCollectionResponse>;
/**
 * @generated from message confidant.v1.UpdateCollectionRequest
 */
export type UpdateCollectionRequest = Message<"confidant.v1.UpdateCollectionRequest"> & {
    /**
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from field: optional string description = 3;
     */
    description?: string;
};
/**
 * Describes the message confidant.v1.UpdateCollectionRequest.
 * Use `create(UpdateCollectionRequestSchema)` to create a new message.
 */
export declare const UpdateCollectionRequestSchema: GenMessage<UpdateCollectionRequest>;
/**
 * @generated from message confidant.v1.UpdateCollectionResponse
 */
export type UpdateCollectionResponse = Message<"confidant.v1.UpdateCollectionResponse"> & {
    /**
     * @generated from field: confidant.v1.Collection collection = 1;
     */
    collection?: Collection;
};
/**
 * Describes the message confidant.v1.UpdateCollectionResponse.
 * Use `create(UpdateCollectionResponseSchema)` to create a new message.
 */
export declare const UpdateCollectionResponseSchema: GenMessage<UpdateCollectionResponse>;
/**
 * @generated from message confidant.v1.DeleteCollectionRequest
 */
export type DeleteCollectionRequest = Message<"confidant.v1.DeleteCollectionRequest"> & {
    /**
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
};
/**
 * Describes the message confidant.v1.DeleteCollectionRequest.
 * Use `create(DeleteCollectionRequestSchema)` to create a new message.
 */
export declare const DeleteCollectionRequestSchema: GenMessage<DeleteCollectionRequest>;
/**
 * @generated from message confidant.v1.DeleteCollectionResponse
 */
export type DeleteCollectionResponse = Message<"confidant.v1.DeleteCollectionResponse"> & {};
/**
 * Describes the message confidant.v1.DeleteCollectionResponse.
 * Use `create(DeleteCollectionResponseSchema)` to create a new message.
 */
export declare const DeleteCollectionResponseSchema: GenMessage<DeleteCollectionResponse>;
/**
 * @generated from message confidant.v1.ListCollectionCardsRequest
 */
export type ListCollectionCardsRequest = Message<"confidant.v1.ListCollectionCardsRequest"> & {
    /**
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * @generated from field: int32 page_size = 2;
     */
    pageSize: number;
    /**
     * @generated from field: string page_token = 3;
     */
    pageToken: string;
};
/**
 * Describes the message confidant.v1.ListCollectionCardsRequest.
 * Use `create(ListCollectionCardsRequestSchema)` to create a new message.
 */
export declare const ListCollectionCardsRequestSchema: GenMessage<ListCollectionCardsRequest>;
/**
 * @generated from message confidant.v1.ListCollectionCardsResponse
 */
export type ListCollectionCardsResponse = Message<"confidant.v1.ListCollectionCardsResponse"> & {
    /**
     * @generated from field: repeated confidant.v1.CollectionCard cards = 1;
     */
    cards: CollectionCard[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
};
/**
 * Describes the message confidant.v1.ListCollectionCardsResponse.
 * Use `create(ListCollectionCardsResponseSchema)` to create a new message.
 */
export declare const ListCollectionCardsResponseSchema: GenMessage<ListCollectionCardsResponse>;
/**
 * @generated from message confidant.v1.AddCardToCollectionRequest
 */
export type AddCardToCollectionRequest = Message<"confidant.v1.AddCardToCollectionRequest"> & {
    /**
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * @generated from field: string card_id = 2;
     */
    cardId: string;
    /**
     * @generated from field: string note = 3;
     */
    note: string;
};
/**
 * Describes the message confidant.v1.AddCardToCollectionRequest.
 * Use `create(AddCardToCollectionRequestSchema)` to create a new message.
 */
export declare const AddCardToCollectionRequestSchema: GenMessage<AddCardToCollectionRequest>;
/**
 * @generated from message confidant.v1.AddCardToCollectionResponse
 */
export type AddCardToCollectionResponse = Message<"confidant.v1.AddCardToCollectionResponse"> & {};
/**
 * Describes the message confidant.v1.AddCardToCollectionResponse.
 * Use `create(AddCardToCollectionResponseSchema)` to create a new message.
 */
export declare const AddCardToCollectionResponseSchema: GenMessage<AddCardToCollectionResponse>;
/**
 * @generated from message confidant.v1.RemoveCardFromCollectionRequest
 */
export type RemoveCardFromCollectionRequest = Message<"confidant.v1.RemoveCardFromCollectionRequest"> & {
    /**
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * @generated from field: string card_id = 2;
     */
    cardId: string;
};
/**
 * Describes the message confidant.v1.RemoveCardFromCollectionRequest.
 * Use `create(RemoveCardFromCollectionRequestSchema)` to create a new message.
 */
export declare const RemoveCardFromCollectionRequestSchema: GenMessage<RemoveCardFromCollectionRequest>;
/**
 * @generated from message confidant.v1.RemoveCardFromCollectionResponse
 */
export type RemoveCardFromCollectionResponse = Message<"confidant.v1.RemoveCardFromCollectionResponse"> & {};
/**
 * Describes the message confidant.v1.RemoveCardFromCollectionResponse.
 * Use `create(RemoveCardFromCollectionResponseSchema)` to create a new message.
 */
export declare const RemoveCardFromCollectionResponseSchema: GenMessage<RemoveCardFromCollectionResponse>;
/**
 * @generated from service confidant.v1.CollectionService
 */
export declare const CollectionService: GenService<{
    /**
     * List the user's collections with card counts.
     *
     * @generated from rpc confidant.v1.CollectionService.ListCollections
     */
    listCollections: {
        methodKind: "unary";
        input: typeof ListCollectionsRequestSchema;
        output: typeof ListCollectionsResponseSchema;
    };
    /**
     * Create a new collection.
     *
     * @generated from rpc confidant.v1.CollectionService.CreateCollection
     */
    createCollection: {
        methodKind: "unary";
        input: typeof CreateCollectionRequestSchema;
        output: typeof CreateCollectionResponseSchema;
    };
    /**
     * Update a collection's name or description.
     *
     * @generated from rpc confidant.v1.CollectionService.UpdateCollection
     */
    updateCollection: {
        methodKind: "unary";
        input: typeof UpdateCollectionRequestSchema;
        output: typeof UpdateCollectionResponseSchema;
    };
    /**
     * Delete a collection. Cards are not deleted.
     *
     * @generated from rpc confidant.v1.CollectionService.DeleteCollection
     */
    deleteCollection: {
        methodKind: "unary";
        input: typeof DeleteCollectionRequestSchema;
        output: typeof DeleteCollectionResponseSchema;
    };
    /**
     * List cards in a collection.
     *
     * @generated from rpc confidant.v1.CollectionService.ListCollectionCards
     */
    listCollectionCards: {
        methodKind: "unary";
        input: typeof ListCollectionCardsRequestSchema;
        output: typeof ListCollectionCardsResponseSchema;
    };
    /**
     * Add a card to a collection.
     *
     * @generated from rpc confidant.v1.CollectionService.AddCardToCollection
     */
    addCardToCollection: {
        methodKind: "unary";
        input: typeof AddCardToCollectionRequestSchema;
        output: typeof AddCardToCollectionResponseSchema;
    };
    /**
     * Remove a card from a collection.
     *
     * @generated from rpc confidant.v1.CollectionService.RemoveCardFromCollection
     */
    removeCardFromCollection: {
        methodKind: "unary";
        input: typeof RemoveCardFromCollectionRequestSchema;
        output: typeof RemoveCardFromCollectionResponseSchema;
    };
}>;
//# sourceMappingURL=collection_service_pb.d.ts.map