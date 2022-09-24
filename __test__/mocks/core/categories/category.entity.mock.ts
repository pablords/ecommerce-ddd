import { CategoryEntity } from "@/core/categories/category.entity";
import { faker } from "@faker-js/faker";

export const categoryInstanceMock = new CategoryEntity({
  id: faker.datatype.uuid(),
  name: faker.commerce.department(),
  description: faker.commerce.productAdjective(),
  createdAt: faker.date.recent(),
  products: [faker.datatype.uuid(), faker.datatype.uuid()],
});
