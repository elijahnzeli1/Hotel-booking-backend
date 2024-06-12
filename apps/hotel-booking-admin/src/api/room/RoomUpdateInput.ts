import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  bookings?: BookingUpdateManyWithoutRoomsInput;
  description?: string | null;
  image?: string | null;
  name?: string | null;
  price?: number | null;
};
