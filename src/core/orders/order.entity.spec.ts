import { OrderEntity } from "./order.entity";
import { faker } from "@faker-js/faker";

describe("OrderEntity", () => {
  it("should be create a order", () => {
    const newOrder = new OrderEntity({
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(),
      paymentId: faker.datatype.uuid(),
      shippingId: faker.datatype.uuid(),
      items: [faker.datatype.uuid(), faker.datatype.uuid()],
      description: faker.commerce.productDescription(),
    });
    const orderCreated = OrderEntity.create(newOrder);
    expect(orderCreated).toEqual(orderCreated);
  });
});
