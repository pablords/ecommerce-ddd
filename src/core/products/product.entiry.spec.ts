import { ProductEntity } from "./product.entity";
import { faker } from "@faker-js/faker";

describe("ProductEntity", () => {
  it("should be create a product", () => {
    const newProduct = new ProductEntity({
      id: faker.datatype.uuid(),
      price: Number(faker.commerce.price(70,300)),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      createdAt: faker.date.recent(),
    });
    const createdProduct = ProductEntity.create(newProduct);
    expect(createdProduct).toEqual(newProduct);
  });
});
