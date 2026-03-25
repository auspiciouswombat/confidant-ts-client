import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { ContactEmail, User } from "./user_pb.js";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file confidant/v1/user_service.proto.
 */
export declare const file_confidant_v1_user_service: GenFile;
/**
 * @generated from message confidant.v1.GetCurrentUserRequest
 */
export type GetCurrentUserRequest = Message<"confidant.v1.GetCurrentUserRequest"> & {};
/**
 * Describes the message confidant.v1.GetCurrentUserRequest.
 * Use `create(GetCurrentUserRequestSchema)` to create a new message.
 */
export declare const GetCurrentUserRequestSchema: GenMessage<GetCurrentUserRequest>;
/**
 * @generated from message confidant.v1.GetCurrentUserResponse
 */
export type GetCurrentUserResponse = Message<"confidant.v1.GetCurrentUserResponse"> & {
    /**
     * @generated from field: confidant.v1.User user = 1;
     */
    user?: User;
};
/**
 * Describes the message confidant.v1.GetCurrentUserResponse.
 * Use `create(GetCurrentUserResponseSchema)` to create a new message.
 */
export declare const GetCurrentUserResponseSchema: GenMessage<GetCurrentUserResponse>;
/**
 * @generated from message confidant.v1.UpdateUserRequest
 */
export type UpdateUserRequest = Message<"confidant.v1.UpdateUserRequest"> & {
    /**
     * @generated from field: optional string display_name = 1;
     */
    displayName?: string;
    /**
     * @generated from field: optional string avatar_url = 2;
     */
    avatarUrl?: string;
};
/**
 * Describes the message confidant.v1.UpdateUserRequest.
 * Use `create(UpdateUserRequestSchema)` to create a new message.
 */
export declare const UpdateUserRequestSchema: GenMessage<UpdateUserRequest>;
/**
 * @generated from message confidant.v1.UpdateUserResponse
 */
export type UpdateUserResponse = Message<"confidant.v1.UpdateUserResponse"> & {
    /**
     * @generated from field: confidant.v1.User user = 1;
     */
    user?: User;
};
/**
 * Describes the message confidant.v1.UpdateUserResponse.
 * Use `create(UpdateUserResponseSchema)` to create a new message.
 */
export declare const UpdateUserResponseSchema: GenMessage<UpdateUserResponse>;
/**
 * @generated from message confidant.v1.CreateContactEmailRequest
 */
export type CreateContactEmailRequest = Message<"confidant.v1.CreateContactEmailRequest"> & {
    /**
     * @generated from field: string label = 1;
     */
    label: string;
};
/**
 * Describes the message confidant.v1.CreateContactEmailRequest.
 * Use `create(CreateContactEmailRequestSchema)` to create a new message.
 */
export declare const CreateContactEmailRequestSchema: GenMessage<CreateContactEmailRequest>;
/**
 * @generated from message confidant.v1.CreateContactEmailResponse
 */
export type CreateContactEmailResponse = Message<"confidant.v1.CreateContactEmailResponse"> & {
    /**
     * @generated from field: confidant.v1.ContactEmail contact_email = 1;
     */
    contactEmail?: ContactEmail;
};
/**
 * Describes the message confidant.v1.CreateContactEmailResponse.
 * Use `create(CreateContactEmailResponseSchema)` to create a new message.
 */
export declare const CreateContactEmailResponseSchema: GenMessage<CreateContactEmailResponse>;
/**
 * @generated from message confidant.v1.ListContactEmailsRequest
 */
export type ListContactEmailsRequest = Message<"confidant.v1.ListContactEmailsRequest"> & {
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
 * Describes the message confidant.v1.ListContactEmailsRequest.
 * Use `create(ListContactEmailsRequestSchema)` to create a new message.
 */
export declare const ListContactEmailsRequestSchema: GenMessage<ListContactEmailsRequest>;
/**
 * @generated from message confidant.v1.ListContactEmailsResponse
 */
export type ListContactEmailsResponse = Message<"confidant.v1.ListContactEmailsResponse"> & {
    /**
     * @generated from field: repeated confidant.v1.ContactEmail contact_emails = 1;
     */
    contactEmails: ContactEmail[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
};
/**
 * Describes the message confidant.v1.ListContactEmailsResponse.
 * Use `create(ListContactEmailsResponseSchema)` to create a new message.
 */
export declare const ListContactEmailsResponseSchema: GenMessage<ListContactEmailsResponse>;
/**
 * @generated from message confidant.v1.RetireContactEmailRequest
 */
export type RetireContactEmailRequest = Message<"confidant.v1.RetireContactEmailRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message confidant.v1.RetireContactEmailRequest.
 * Use `create(RetireContactEmailRequestSchema)` to create a new message.
 */
export declare const RetireContactEmailRequestSchema: GenMessage<RetireContactEmailRequest>;
/**
 * @generated from message confidant.v1.RetireContactEmailResponse
 */
export type RetireContactEmailResponse = Message<"confidant.v1.RetireContactEmailResponse"> & {
    /**
     * @generated from field: confidant.v1.ContactEmail contact_email = 1;
     */
    contactEmail?: ContactEmail;
};
/**
 * Describes the message confidant.v1.RetireContactEmailResponse.
 * Use `create(RetireContactEmailResponseSchema)` to create a new message.
 */
export declare const RetireContactEmailResponseSchema: GenMessage<RetireContactEmailResponse>;
/**
 * @generated from message confidant.v1.ReactivateContactEmailRequest
 */
export type ReactivateContactEmailRequest = Message<"confidant.v1.ReactivateContactEmailRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message confidant.v1.ReactivateContactEmailRequest.
 * Use `create(ReactivateContactEmailRequestSchema)` to create a new message.
 */
export declare const ReactivateContactEmailRequestSchema: GenMessage<ReactivateContactEmailRequest>;
/**
 * @generated from message confidant.v1.ReactivateContactEmailResponse
 */
export type ReactivateContactEmailResponse = Message<"confidant.v1.ReactivateContactEmailResponse"> & {
    /**
     * @generated from field: confidant.v1.ContactEmail contact_email = 1;
     */
    contactEmail?: ContactEmail;
};
/**
 * Describes the message confidant.v1.ReactivateContactEmailResponse.
 * Use `create(ReactivateContactEmailResponseSchema)` to create a new message.
 */
export declare const ReactivateContactEmailResponseSchema: GenMessage<ReactivateContactEmailResponse>;
/**
 * @generated from message confidant.v1.UpdateContactEmailLabelRequest
 */
export type UpdateContactEmailLabelRequest = Message<"confidant.v1.UpdateContactEmailLabelRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string label = 2;
     */
    label: string;
};
/**
 * Describes the message confidant.v1.UpdateContactEmailLabelRequest.
 * Use `create(UpdateContactEmailLabelRequestSchema)` to create a new message.
 */
export declare const UpdateContactEmailLabelRequestSchema: GenMessage<UpdateContactEmailLabelRequest>;
/**
 * @generated from message confidant.v1.UpdateContactEmailLabelResponse
 */
export type UpdateContactEmailLabelResponse = Message<"confidant.v1.UpdateContactEmailLabelResponse"> & {
    /**
     * @generated from field: confidant.v1.ContactEmail contact_email = 1;
     */
    contactEmail?: ContactEmail;
};
/**
 * Describes the message confidant.v1.UpdateContactEmailLabelResponse.
 * Use `create(UpdateContactEmailLabelResponseSchema)` to create a new message.
 */
export declare const UpdateContactEmailLabelResponseSchema: GenMessage<UpdateContactEmailLabelResponse>;
/**
 * @generated from service confidant.v1.UserService
 */
export declare const UserService: GenService<{
    /**
     * Returns the current authenticated user, creating the account on first call.
     *
     * @generated from rpc confidant.v1.UserService.GetCurrentUser
     */
    getCurrentUser: {
        methodKind: "unary";
        input: typeof GetCurrentUserRequestSchema;
        output: typeof GetCurrentUserResponseSchema;
    };
    /**
     * Updates the authenticated user's profile fields.
     *
     * @generated from rpc confidant.v1.UserService.UpdateUser
     */
    updateUser: {
        methodKind: "unary";
        input: typeof UpdateUserRequestSchema;
        output: typeof UpdateUserResponseSchema;
    };
    /**
     * Creates a new server-generated contact email address for the user.
     *
     * @generated from rpc confidant.v1.UserService.CreateContactEmail
     */
    createContactEmail: {
        methodKind: "unary";
        input: typeof CreateContactEmailRequestSchema;
        output: typeof CreateContactEmailResponseSchema;
    };
    /**
     * Lists all contact emails for the authenticated user (including retired).
     *
     * @generated from rpc confidant.v1.UserService.ListContactEmails
     */
    listContactEmails: {
        methodKind: "unary";
        input: typeof ListContactEmailsRequestSchema;
        output: typeof ListContactEmailsResponseSchema;
    };
    /**
     * Retires a contact email (soft-delete — preserved for history).
     *
     * @generated from rpc confidant.v1.UserService.RetireContactEmail
     */
    retireContactEmail: {
        methodKind: "unary";
        input: typeof RetireContactEmailRequestSchema;
        output: typeof RetireContactEmailResponseSchema;
    };
    /**
     * Reactivates a previously retired contact email.
     *
     * @generated from rpc confidant.v1.UserService.ReactivateContactEmail
     */
    reactivateContactEmail: {
        methodKind: "unary";
        input: typeof ReactivateContactEmailRequestSchema;
        output: typeof ReactivateContactEmailResponseSchema;
    };
    /**
     * Updates the user-editable label on a contact email.
     *
     * @generated from rpc confidant.v1.UserService.UpdateContactEmailLabel
     */
    updateContactEmailLabel: {
        methodKind: "unary";
        input: typeof UpdateContactEmailLabelRequestSchema;
        output: typeof UpdateContactEmailLabelResponseSchema;
    };
}>;
//# sourceMappingURL=user_service_pb.d.ts.map