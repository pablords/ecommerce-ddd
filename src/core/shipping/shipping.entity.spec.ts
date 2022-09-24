import { faker } from "@faker-js/faker";
import { ShippingEntity } from "./shipping.entity";

describe("ShippingEntity", () => {
  it("should be create a shipping", () => {
    const newShipping = new ShippingEntity({
      id: faker.datatype.uuid(),
      cost: faker.datatype.number(),
      addressId: faker.datatype.uuid(),
      description: faker.commerce.productDescription(),
      createdAt: faker.date.recent()
    });
    const shippingCreated = ShippingEntity.create(newShipping)
    expect(newShipping).toEqual(newShipping)
  });
});
