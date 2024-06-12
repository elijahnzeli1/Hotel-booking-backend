import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
