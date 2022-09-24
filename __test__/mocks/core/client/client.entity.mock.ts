import { ClientEntity } from "@/core/client/client.entity";
import { faker } from "@faker-js/faker";



export const clientEntiryMock = new ClientEntity({
    id: faker.datatype.uuid(),
    age: faker.date.recent(),
    document: faker.finance.accountName(),
    name: faker.name.firstName(),
    addressId: faker.datatype.uuid(),
    createdAt: faker.date.recent()
})
