import { ProductEntityInterface } from "./product.entity.interface";

export class ProductEntity implements ProductEntityInterface {
  id: string;
  price: number;
  name: string;
  description: string;
  createdAt: Date;

  constructor({
    id,
    price,
    name,
    description,
    createdAt,
  }: ProductEntityInterface) {
    return Object.assign(this, {
      id,
      price,
      name,
      description,
      createdAt,
    });
  }

  static create({
    id,
    price,
    name,
    description,
    createdAt,
  }: ProductEntityInterface) {
    const product = new ProductEntity({
      id,
      price,
      name,
      description,
      createdAt,
    });
    return product;
  }
}
