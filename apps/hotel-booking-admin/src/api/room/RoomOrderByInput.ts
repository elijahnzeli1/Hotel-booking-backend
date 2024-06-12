import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
