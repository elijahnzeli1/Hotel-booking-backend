import { Room } from "../room/Room";
import { User } from "../user/User";

export type Booking = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  room?: Room | null;
  startDate: Date | null;
  status: string | null;
  updatedAt: Date;
  user?: User | null;
};
