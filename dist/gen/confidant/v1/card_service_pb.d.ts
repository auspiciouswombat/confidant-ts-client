import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Card, UserCardState } from "./card_pb.js";
import type { CardStatusFilter, CardType, SeenFilter } from "./common_pb.js";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file confidant/v1/card_service.proto.
 */
export declare const file_confidant_v1_card_service: GenFile;
/**
 * @generated from message confidant.v1.ListCardsRequest
 */
export type ListCardsRequest = Message<"confidant.v1.ListCardsRequest"> & {
    /**
     * @generated from field: int32 page_size = 1;
     */
    pageSize: number;
    /**
     * @generated from field: string page_token = 2;
     */
    pageToken: string;
    /**
     * @generated from field: repeated string brand_ids = 3;
     */
    brandIds: string[];
    /**
     * @generated from field: repeated confidant.v1.CardType card_types = 4;
     */
    cardTypes: CardType[];
    /**
     * @generated from field: confidant.v1.CardStatusFilter status_filter = 5;
     */
    statusFilter: CardStatusFilter;
    /**
     * @generated from field: confidant.v1.SeenFilter seen_filter = 6;
     */
    seenFilter: SeenFilter;
    /**
     * @generated from field: google.protobuf.Timestamp active_after = 7;
     */
    activeAfter?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp active_before = 8;
     */
    activeBefore?: Timestamp;
};
/**
 * Describes the message confidant.v1.ListCardsRequest.
 * Use `create(ListCardsRequestSchema)` to create a new message.
 */
export declare const ListCardsRequestSchema: GenMessage<ListCardsRequest>;
/**
 * @generated from message confidant.v1.ListCardsResponse
 */
export type ListCardsResponse = Message<"confidant.v1.ListCardsResponse"> & {
    /**
     * @generated from field: repeated confidant.v1.Card cards = 1;
     */
    cards: Card[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
};
/**
 * Describes the message confidant.v1.ListCardsResponse.
 * Use `create(ListCardsResponseSchema)` to create a new message.
 */
export declare const ListCardsResponseSchema: GenMessage<ListCardsResponse>;
/**
 * @generated from message confidant.v1.GetCardRequest
 */
export type GetCardRequest = Message<"confidant.v1.GetCardRequest"> & {
    /**
     * @generated from field: string card_id = 1;
     */
    cardId: string;
};
/**
 * Describes the message confidant.v1.GetCardRequest.
 * Use `create(GetCardRequestSchema)` to create a new message.
 */
export declare const GetCardRequestSchema: GenMessage<GetCardRequest>;
/**
 * @generated from message confidant.v1.GetCardResponse
 */
export type GetCardResponse = Message<"confidant.v1.GetCardResponse"> & {
    /**
     * @generated from field: confidant.v1.Card card = 1;
     */
    card?: Card;
    /**
     * @generated from field: string original_email_url = 2;
     */
    originalEmailUrl: string;
};
/**
 * Describes the message confidant.v1.GetCardResponse.
 * Use `create(GetCardResponseSchema)` to create a new message.
 */
export declare const GetCardResponseSchema: GenMessage<GetCardResponse>;
/**
 * @generated from message confidant.v1.SearchCardsRequest
 */
export type SearchCardsRequest = Message<"confidant.v1.SearchCardsRequest"> & {
    /**
     * @generated from field: string query = 1;
     */
    query: string;
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
 * Describes the message confidant.v1.SearchCardsRequest.
 * Use `create(SearchCardsRequestSchema)` to create a new message.
 */
export declare const SearchCardsRequestSchema: GenMessage<SearchCardsRequest>;
/**
 * @generated from message confidant.v1.SearchCardsResponse
 */
export type SearchCardsResponse = Message<"confidant.v1.SearchCardsResponse"> & {
    /**
     * @generated from field: repeated confidant.v1.Card cards = 1;
     */
    cards: Card[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
};
/**
 * Describes the message confidant.v1.SearchCardsResponse.
 * Use `create(SearchCardsResponseSchema)` to create a new message.
 */
export declare const SearchCardsResponseSchema: GenMessage<SearchCardsResponse>;
/**
 * @generated from message confidant.v1.MarkCardsSeenRequest
 */
export type MarkCardsSeenRequest = Message<"confidant.v1.MarkCardsSeenRequest"> & {
    /**
     * @generated from field: repeated string card_ids = 1;
     */
    cardIds: string[];
};
/**
 * Describes the message confidant.v1.MarkCardsSeenRequest.
 * Use `create(MarkCardsSeenRequestSchema)` to create a new message.
 */
export declare const MarkCardsSeenRequestSchema: GenMessage<MarkCardsSeenRequest>;
/**
 * @generated from message confidant.v1.MarkCardsSeenResponse
 */
export type MarkCardsSeenResponse = Message<"confidant.v1.MarkCardsSeenResponse"> & {};
/**
 * Describes the message confidant.v1.MarkCardsSeenResponse.
 * Use `create(MarkCardsSeenResponseSchema)` to create a new message.
 */
export declare const MarkCardsSeenResponseSchema: GenMessage<MarkCardsSeenResponse>;
/**
 * @generated from message confidant.v1.DismissCardRequest
 */
export type DismissCardRequest = Message<"confidant.v1.DismissCardRequest"> & {
    /**
     * @generated from field: string card_id = 1;
     */
    cardId: string;
};
/**
 * Describes the message confidant.v1.DismissCardRequest.
 * Use `create(DismissCardRequestSchema)` to create a new message.
 */
export declare const DismissCardRequestSchema: GenMessage<DismissCardRequest>;
/**
 * @generated from message confidant.v1.DismissCardResponse
 */
export type DismissCardResponse = Message<"confidant.v1.DismissCardResponse"> & {};
/**
 * Describes the message confidant.v1.DismissCardResponse.
 * Use `create(DismissCardResponseSchema)` to create a new message.
 */
export declare const DismissCardResponseSchema: GenMessage<DismissCardResponse>;
/**
 * @generated from message confidant.v1.SaveCardRequest
 */
export type SaveCardRequest = Message<"confidant.v1.SaveCardRequest"> & {
    /**
     * @generated from field: string card_id = 1;
     */
    cardId: string;
};
/**
 * Describes the message confidant.v1.SaveCardRequest.
 * Use `create(SaveCardRequestSchema)` to create a new message.
 */
export declare const SaveCardRequestSchema: GenMessage<SaveCardRequest>;
/**
 * @generated from message confidant.v1.SaveCardResponse
 */
export type SaveCardResponse = Message<"confidant.v1.SaveCardResponse"> & {};
/**
 * Describes the message confidant.v1.SaveCardResponse.
 * Use `create(SaveCardResponseSchema)` to create a new message.
 */
export declare const SaveCardResponseSchema: GenMessage<SaveCardResponse>;
/**
 * @generated from message confidant.v1.UnsaveCardRequest
 */
export type UnsaveCardRequest = Message<"confidant.v1.UnsaveCardRequest"> & {
    /**
     * @generated from field: string card_id = 1;
     */
    cardId: string;
};
/**
 * Describes the message confidant.v1.UnsaveCardRequest.
 * Use `create(UnsaveCardRequestSchema)` to create a new message.
 */
export declare const UnsaveCardRequestSchema: GenMessage<UnsaveCardRequest>;
/**
 * @generated from message confidant.v1.UnsaveCardResponse
 */
export type UnsaveCardResponse = Message<"confidant.v1.UnsaveCardResponse"> & {};
/**
 * Describes the message confidant.v1.UnsaveCardResponse.
 * Use `create(UnsaveCardResponseSchema)` to create a new message.
 */
export declare const UnsaveCardResponseSchema: GenMessage<UnsaveCardResponse>;
/**
 * @generated from message confidant.v1.NoteOnCardRequest
 */
export type NoteOnCardRequest = Message<"confidant.v1.NoteOnCardRequest"> & {
    /**
     * @generated from field: string card_id = 1;
     */
    cardId: string;
    /**
     * @generated from field: string note = 2;
     */
    note: string;
};
/**
 * Describes the message confidant.v1.NoteOnCardRequest.
 * Use `create(NoteOnCardRequestSchema)` to create a new message.
 */
export declare const NoteOnCardRequestSchema: GenMessage<NoteOnCardRequest>;
/**
 * @generated from message confidant.v1.NoteOnCardResponse
 */
export type NoteOnCardResponse = Message<"confidant.v1.NoteOnCardResponse"> & {
    /**
     * @generated from field: confidant.v1.UserCardState user_state = 1;
     */
    userState?: UserCardState;
};
/**
 * Describes the message confidant.v1.NoteOnCardResponse.
 * Use `create(NoteOnCardResponseSchema)` to create a new message.
 */
export declare const NoteOnCardResponseSchema: GenMessage<NoteOnCardResponse>;
/**
 * @generated from message confidant.v1.DeleteNoteRequest
 */
export type DeleteNoteRequest = Message<"confidant.v1.DeleteNoteRequest"> & {
    /**
     * @generated from field: string card_id = 1;
     */
    cardId: string;
};
/**
 * Describes the message confidant.v1.DeleteNoteRequest.
 * Use `create(DeleteNoteRequestSchema)` to create a new message.
 */
export declare const DeleteNoteRequestSchema: GenMessage<DeleteNoteRequest>;
/**
 * @generated from message confidant.v1.DeleteNoteResponse
 */
export type DeleteNoteResponse = Message<"confidant.v1.DeleteNoteResponse"> & {};
/**
 * Describes the message confidant.v1.DeleteNoteResponse.
 * Use `create(DeleteNoteResponseSchema)` to create a new message.
 */
export declare const DeleteNoteResponseSchema: GenMessage<DeleteNoteResponse>;
/**
 * @generated from service confidant.v1.CardService
 */
export declare const CardService: GenService<{
    /**
     * List cards from the user's followed brands with filtering and pagination.
     *
     * @generated from rpc confidant.v1.CardService.ListCards
     */
    listCards: {
        methodKind: "unary";
        input: typeof ListCardsRequestSchema;
        output: typeof ListCardsResponseSchema;
    };
    /**
     * Get a single card with full details.
     *
     * @generated from rpc confidant.v1.CardService.GetCard
     */
    getCard: {
        methodKind: "unary";
        input: typeof GetCardRequestSchema;
        output: typeof GetCardResponseSchema;
    };
    /**
     * Text search across card titles, summaries, and brand names.
     *
     * @generated from rpc confidant.v1.CardService.SearchCards
     */
    searchCards: {
        methodKind: "unary";
        input: typeof SearchCardsRequestSchema;
        output: typeof SearchCardsResponseSchema;
    };
    /**
     * Record that the user has seen these cards (viewport entry).
     *
     * @generated from rpc confidant.v1.CardService.MarkCardsSeen
     */
    markCardsSeen: {
        methodKind: "unary";
        input: typeof MarkCardsSeenRequestSchema;
        output: typeof MarkCardsSeenResponseSchema;
    };
    /**
     * Dismiss a card from the user's feed.
     *
     * @generated from rpc confidant.v1.CardService.DismissCard
     */
    dismissCard: {
        methodKind: "unary";
        input: typeof DismissCardRequestSchema;
        output: typeof DismissCardResponseSchema;
    };
    /**
     * Quick-save a card without a collection.
     *
     * @generated from rpc confidant.v1.CardService.SaveCard
     */
    saveCard: {
        methodKind: "unary";
        input: typeof SaveCardRequestSchema;
        output: typeof SaveCardResponseSchema;
    };
    /**
     * Remove quick-save.
     *
     * @generated from rpc confidant.v1.CardService.UnsaveCard
     */
    unsaveCard: {
        methodKind: "unary";
        input: typeof UnsaveCardRequestSchema;
        output: typeof UnsaveCardResponseSchema;
    };
    /**
     * Add or update a personal note on a card.
     *
     * @generated from rpc confidant.v1.CardService.NoteOnCard
     */
    noteOnCard: {
        methodKind: "unary";
        input: typeof NoteOnCardRequestSchema;
        output: typeof NoteOnCardResponseSchema;
    };
    /**
     * Remove a note from a card.
     *
     * @generated from rpc confidant.v1.CardService.DeleteNote
     */
    deleteNote: {
        methodKind: "unary";
        input: typeof DeleteNoteRequestSchema;
        output: typeof DeleteNoteResponseSchema;
    };
}>;
//# sourceMappingURL=card_service_pb.d.ts.map