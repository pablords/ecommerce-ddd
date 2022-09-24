import { ClientEntity } from "./client.entity";
import { faker } from "@faker-js/faker";

describe("ClientEntity", () => {
  it("should be create a client", () => {
    const newClient = new ClientEntity({
      name: faker.name.firstName(),
      age: faker.date.birthdate({ mode: "age" }),
      createdAt: faker.date.recent(),
      document: faker.finance.account(),
      id: faker.datatype.uuid(),
    });
    const createdClient = ClientEntity.create(newClient)
    expect(createdClient).toEqual(newClient)
  });
});
