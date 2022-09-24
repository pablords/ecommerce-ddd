import { GetOneClientUseCase } from "./get-one-client.use-case";
import { dbconfigMock } from "@test/mocks/app/config/db-config.mock";
import { entityManager } from "@/app/config/modules/db/db.module";
import { ClientEntity } from "@/app/modules/client/client.entity";
import { ClientRepository } from "../../repository/client.repository";
import { Repository } from "typeorm";
import { clientEntiryMock } from "@test/mocks/core/client/client.entity.mock";

const RepositoryMock = entityManager.getRepository(ClientEntity);
const repositoryMock = RepositoryMock as jest.Mocked<Repository<ClientEntity>>;

const clientRepository = new ClientRepository(repositoryMock);
const getOneClientUseCase = new GetOneClientUseCase(clientRepository);

describe("GetOneClientUseCase", () => {
  beforeAll(() => {
    dbconfigMock;
  });

  it("should be return a client", async () => {
    jest.spyOn(clientRepository, "findOne").mockResolvedValueOnce(clientEntiryMock);
    const output = await getOneClientUseCase.execute("1");
    expect(output).toEqual(clientEntiryMock)
  });
});
