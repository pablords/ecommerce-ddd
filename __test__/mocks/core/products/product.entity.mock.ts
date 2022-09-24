import { ProductEntity } from "@/core/products/product.entity";
import { faker } from "@faker-js/faker";

export const productInstanceMock = new ProductEntity({
  id: faker.datatype.uuid(),
  price: Number(faker.commerce.price(70, 300)),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  createdAt: faker.date.recent(),
  categories: [faker.datatype.uuid(), faker.datatype.uuid()],
});
