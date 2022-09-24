import { AddressEntity } from "./address.entity";
import { faker } from "@faker-js/faker";

describe("AddressEntity", () => {
  it("should be create a address", () => {
    const newAddress = new AddressEntity({
      city: faker.address.cityName(),
      complement: faker.address.buildingNumber(),
      country: faker.address.country(),
      createdAt: faker.date.recent(1),
      district: faker.address.streetAddress(),
      number: faker.datatype.number(),
      id: faker.datatype.uuid(),
      clientId: faker.datatype.uuid(),
      uf: faker.address.state(),
      zipCode: faker.datatype.number(),
    });

    const createAddress = AddressEntity.create(newAddress);
    expect(createAddress).toEqual(newAddress);
  });
});
