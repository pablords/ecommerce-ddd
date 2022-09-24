import "dotenv/config";
import { faker } from "@faker-js/faker";
import { CreateClientDtoInterface } from "../../dto/create-client.dto.interface";
import { ClientRepository } from "../../repository/client.repository";
import { CreateClientUseCase } from "./create-client.use-case";
import { entityManager } from "@/app/config/modules/db/db.module";
import { ClientEntity } from "@/app/modules/client/client.entity";
import { Repository } from "typeorm";
import { dbconfigMock } from "@test/mocks/app/config/db-config.mock";

const RepositoryMock = entityManager.getRepository(ClientEntity);
const repositoryMock = RepositoryMock as jest.Mocked<Repository<ClientEntity>>;

const clientRepository = new ClientRepository(repositoryMock);
const createUseCase = new CreateClientUseCase(clientRepository);

describe("CreateClientUseCase", () => {
  beforeAll(() => {
    dbconfigMock;
  });
  
  it("should be create a client", async () => {
    const dataRequest: CreateClientDtoInterface = {
      addressId: faker.datatype.uuid(),
      age: faker.date.recent(),
      document: faker.finance.account(),
      name: faker.name.firstName(),
    };

    const dataResponse: ClientEntity = {
      ...dataRequest,
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    };

    jest.spyOn(clientRepository, "create").mockResolvedValueOnce(dataResponse);

    const output = await createUseCase.execute(dataRequest);
    expect(output).toEqual(dataResponse);
  });
});
