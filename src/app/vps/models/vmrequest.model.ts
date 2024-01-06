import { VmGuestOS } from "../shared/enums/guest-os";

export interface VMRequest {
    plan_id: string;
    name: string;
    description: string;
    operating_system: VmGuestOS;
}