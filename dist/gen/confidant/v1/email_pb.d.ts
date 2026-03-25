import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file confidant/v1/email.proto.
 */
export declare const file_confidant_v1_email: GenFile;
/**
 * @generated from message confidant.v1.DiscoveredBrand
 */
export type DiscoveredBrand = Message<"confidant.v1.DiscoveredBrand"> & {
    /**
     * @generated from field: string sender_address = 1;
     */
    senderAddress: string;
    /**
     * @generated from field: string sender_name = 2;
     */
    senderName: string;
    /**
     * @generated from field: int32 email_count = 3;
     */
    emailCount: number;
    /**
     * @generated from field: google.protobuf.Timestamp first_seen_at = 4;
     */
    firstSeenAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp last_seen_at = 5;
     */
    lastSeenAt?: Timestamp;
};
/**
 * Describes the message confidant.v1.DiscoveredBrand.
 * Use `create(DiscoveredBrandSchema)` to create a new message.
 */
export declare const DiscoveredBrandSchema: GenMessage<DiscoveredBrand>;
//# sourceMappingURL=email_pb.d.ts.map