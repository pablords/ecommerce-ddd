import { CreateClientUseCase } from "@/core/client/use-cases/create-client/create-client.use-case";
import { ClientRepository } from "@/core/client/repository/client.repository";
import { ClientEntity } from "../../app/modules/client/client.entity";
import { entityManager } from "@/app/config/modules/db/db.module";
import { GetOneClientUseCase } from "@/core/client/use-cases/get-one-client/get-one-client.use-case";
import { CreateClientWithAddressUseCase } from "@/core/client/use-cases/create-client-with-address/create-client-with-address-use-case";

const repository = entityManager.getRepository(ClientEntity);
const clientRepository = new ClientRepository(repository);

const createClientUseCase = new CreateClientUseCase(clientRepository);
const getOneClientUseCase = new GetOneClientUseCase(clientRepository);
const createClientWithAddressUseCase = new CreateClientWithAddressUseCase(
  clientRepository
);

export {
  createClientUseCase,
  getOneClientUseCase,
  createClientWithAddressUseCase,
  entityManager
};
