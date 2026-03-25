import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { IntakeAddress, User } from "./user_pb.js";
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
 * @generated from message confidant.v1.AddIntakeAddressRequest
 */
export type AddIntakeAddressRequest = Message<"confidant.v1.AddIntakeAddressRequest"> & {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: string label = 2;
     */
    label: string;
};
/**
 * Describes the message confidant.v1.AddIntakeAddressRequest.
 * Use `create(AddIntakeAddressRequestSchema)` to create a new message.
 */
export declare const AddIntakeAddressRequestSchema: GenMessage<AddIntakeAddressRequest>;
/**
 * @generated from message confidant.v1.AddIntakeAddressResponse
 */
export type AddIntakeAddressResponse = Message<"confidant.v1.AddIntakeAddressResponse"> & {
    /**
     * @generated from field: confidant.v1.IntakeAddress intake_address = 1;
     */
    intakeAddress?: IntakeAddress;
};
/**
 * Describes the message confidant.v1.AddIntakeAddressResponse.
 * Use `create(AddIntakeAddressResponseSchema)` to create a new message.
 */
export declare const AddIntakeAddressResponseSchema: GenMessage<AddIntakeAddressResponse>;
/**
 * @generated from message confidant.v1.ListIntakeAddressesRequest
 */
export type ListIntakeAddressesRequest = Message<"confidant.v1.ListIntakeAddressesRequest"> & {};
/**
 * Describes the message confidant.v1.ListIntakeAddressesRequest.
 * Use `create(ListIntakeAddressesRequestSchema)` to create a new message.
 */
export declare const ListIntakeAddressesRequestSchema: GenMessage<ListIntakeAddressesRequest>;
/**
 * @generated from message confidant.v1.ListIntakeAddressesResponse
 */
export type ListIntakeAddressesResponse = Message<"confidant.v1.ListIntakeAddressesResponse"> & {
    /**
     * @generated from field: repeated confidant.v1.IntakeAddress intake_addresses = 1;
     */
    intakeAddresses: IntakeAddress[];
};
/**
 * Describes the message confidant.v1.ListIntakeAddressesResponse.
 * Use `create(ListIntakeAddressesResponseSchema)` to create a new message.
 */
export declare const ListIntakeAddressesResponseSchema: GenMessage<ListIntakeAddressesResponse>;
/**
 * @generated from message confidant.v1.RemoveIntakeAddressRequest
 */
export type RemoveIntakeAddressRequest = Message<"confidant.v1.RemoveIntakeAddressRequest"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
};
/**
 * Describes the message confidant.v1.RemoveIntakeAddressRequest.
 * Use `create(RemoveIntakeAddressRequestSchema)` to create a new message.
 */
export declare const RemoveIntakeAddressRequestSchema: GenMessage<RemoveIntakeAddressRequest>;
/**
 * @generated from message confidant.v1.RemoveIntakeAddressResponse
 */
export type RemoveIntakeAddressResponse = Message<"confidant.v1.RemoveIntakeAddressResponse"> & {};
/**
 * Describes the message confidant.v1.RemoveIntakeAddressResponse.
 * Use `create(RemoveIntakeAddressResponseSchema)` to create a new message.
 */
export declare const RemoveIntakeAddressResponseSchema: GenMessage<RemoveIntakeAddressResponse>;
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
 * @generated from service confidant.v1.UserService
 */
export declare const UserService: GenService<{
    /**
     * Returns the current authenticated user, creating the account on first call.
     * Identity is derived from the JWT — no request fields needed.
     *
     * @generated from rpc confidant.v1.UserService.GetCurrentUser
     */
    getCurrentUser: {
        methodKind: "unary";
        input: typeof GetCurrentUserRequestSchema;
        output: typeof GetCurrentUserResponseSchema;
    };
    /**
     * Adds an intake email address for the authenticated user.
     *
     * @generated from rpc confidant.v1.UserService.AddIntakeAddress
     */
    addIntakeAddress: {
        methodKind: "unary";
        input: typeof AddIntakeAddressRequestSchema;
        output: typeof AddIntakeAddressResponseSchema;
    };
    /**
     * Lists all intake addresses for the authenticated user.
     *
     * @generated from rpc confidant.v1.UserService.ListIntakeAddresses
     */
    listIntakeAddresses: {
        methodKind: "unary";
        input: typeof ListIntakeAddressesRequestSchema;
        output: typeof ListIntakeAddressesResponseSchema;
    };
    /**
     * Removes an intake address by ID for the authenticated user.
     *
     * @generated from rpc confidant.v1.UserService.RemoveIntakeAddress
     */
    removeIntakeAddress: {
        methodKind: "unary";
        input: typeof RemoveIntakeAddressRequestSchema;
        output: typeof RemoveIntakeAddressResponseSchema;
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
}>;
//# sourceMappingURL=user_service_pb.d.ts.map