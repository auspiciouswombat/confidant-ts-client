import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file confidant/v1/user.proto.
 */
export declare const file_confidant_v1_user: GenFile;
/**
 * @generated from message confidant.v1.User
 */
export type User = Message<"confidant.v1.User"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string email = 2;
     */
    email: string;
    /**
     * @generated from field: string display_name = 3;
     */
    displayName: string;
    /**
     * @generated from field: string inbound_address = 4;
     */
    inboundAddress: string;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
};
/**
 * Describes the message confidant.v1.User.
 * Use `create(UserSchema)` to create a new message.
 */
export declare const UserSchema: GenMessage<User>;
/**
 * @generated from message confidant.v1.IntakeAddress
 */
export type IntakeAddress = Message<"confidant.v1.IntakeAddress"> & {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: string label = 3;
     */
    label: string;
    /**
     * @generated from field: bool is_primary = 4;
     */
    isPrimary: boolean;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 5;
     */
    createdAt?: Timestamp;
};
/**
 * Describes the message confidant.v1.IntakeAddress.
 * Use `create(IntakeAddressSchema)` to create a new message.
 */
export declare const IntakeAddressSchema: GenMessage<IntakeAddress>;
//# sourceMappingURL=user_pb.d.ts.map