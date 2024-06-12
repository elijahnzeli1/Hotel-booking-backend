import { Booking } from "../booking/Booking";

export type Room = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  id: string;
  image: string | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
