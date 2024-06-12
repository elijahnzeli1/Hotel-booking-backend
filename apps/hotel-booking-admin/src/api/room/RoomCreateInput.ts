import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
  description?: string | null;
  image?: string | null;
  name?: string | null;
  price?: number | null;
};
