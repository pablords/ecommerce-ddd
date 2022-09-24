import { OrderEntityInterface } from "./order.entity.interface";

export class OrderEntity implements OrderEntityInterface {
  id: string;
  items: string[];
  paymentId: string;
  shippingId: string;
  description: string;
  createdAt: Date;

  constructor({
    id,
    items,
    createdAt,
    description,
    paymentId,
    shippingId,
  }: OrderEntityInterface) {
    return Object.assign(this, {
      id,
      items,
      createdAt,
      description,
      paymentId,
      shippingId,
    });
  }

  static create({
    id,
    items,
    createdAt,
    description,
    paymentId,
    shippingId,
  }: OrderEntityInterface) {
    const order = new OrderEntity({
      id,
      items,
      createdAt,
      description,
      paymentId,
      shippingId,
    });
    return order;
  }
}
