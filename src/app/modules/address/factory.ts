import { entityManager } from "@/app/config/modules/db/db.module";
import { AddressRepository } from "@/core/address/repository/address.repository";
import { CreateAddressUseCase } from "@/core/address/use-cases/create-address.use-case";
import { AddressEntity } from "./address.entity";

const repository = entityManager.getRepository(AddressEntity);
const addressRepository = new AddressRepository(repository);
const createAddressUseCase = new CreateAddressUseCase(addressRepository);

export { addressRepository, createAddressUseCase };
