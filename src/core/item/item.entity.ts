import { ItemEntityInterface } from "./item.entity.interface";

export class ItemEntity implements ItemEntityInterface {
  id: string;
  orderId: string;
  productId: string;
  amount: number;
  createdAt: Date

  constructor({
    id,
    amount,
    createdAt,
    orderId,
    productId,
  }: ItemEntityInterface) {
    return Object.assign(this, {
      id,
      amount,
      createdAt,
      orderId,
      productId,
    });
  }

  static create({
    id,
    amount,
    createdAt,
    orderId,
    productId,
  }: ItemEntityInterface) {
    const item = new ItemEntity({
      id,
      amount,
      createdAt,
      orderId,
      productId,
    });

    return item
  }
}
