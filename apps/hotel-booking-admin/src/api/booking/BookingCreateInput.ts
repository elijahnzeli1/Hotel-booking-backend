import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  endDate?: Date | null;
  room?: RoomWhereUniqueInput | null;
  startDate?: Date | null;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
