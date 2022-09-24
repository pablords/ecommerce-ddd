import { BaseEntityInterface } from "../shared/base.entity.interface";

export interface OrderEntityInterface extends BaseEntityInterface {
  items?: string[];
  paymentId?: string;
  shippingId?: string;
  description?: string;
}
