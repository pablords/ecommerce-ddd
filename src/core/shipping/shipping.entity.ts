import { BaseEntity } from "../shared/base.entity";
import { ShippingEntityInterface } from "./shipping.entity.interface";

export class ShippingEntity implements BaseEntity {
  id: string;
  cost: number
  addressId: string;
  description: string;
  createdAt: Date
  constructor({
    id,
    cost,
    addressId,
    createdAt,
    description,
  }: ShippingEntityInterface) {
    return Object.assign(this, {
      id,
      cost,
      addressId,
      createdAt,
      description,
    });
  }

  static create({
    id,
    cost,
    addressId,
    createdAt,
    description,
  }: ShippingEntityInterface) {
    const shipping = new ShippingEntity({
      id,
      cost,
      addressId,
      createdAt,
      description,
    });
    return shipping
  }
}
