import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RoomWhereInput = {
  bookings?: BookingListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
