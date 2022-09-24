import { CategoryEntityInterface } from "./category.entity.interface";

export class CategoryEntity implements CategoryEntityInterface{
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  constructor({ id, name, description, createdAt }: CategoryEntityInterface) {
    return Object.assign(this, {
      id,
      name,
      description,
      createdAt,
    });
  }

  static create({ id, name, description, createdAt }: CategoryEntityInterface) {
    const category = new CategoryEntity({ id, name, description, createdAt });
    return category
  }
}
