import { faker } from "@faker-js/faker";
import { ItemEntity } from "./item.entity";

describe("ItemEntity", () => {
  it("should be create a item", () => {
    const newItem = new ItemEntity({
      id: faker.datatype.uuid(),
      amount: faker.datatype.number(),
      createdAt: faker.date.recent(),
      orderId: faker.datatype.uuid(),
      productId: faker.datatype.uuid(),
    });

    const createdItem = ItemEntity.create(newItem)
    expect(createdItem).toEqual(newItem)
  });
});
