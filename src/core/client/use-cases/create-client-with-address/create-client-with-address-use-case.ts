import { ClientRepositoryInterface } from "../../repository/client.repository.interface";
import { CreateClientWithAddressDtoInterface } from "../../dto/create-client-with-address.dto.interface";
import { createAddressUseCase } from "@/app/modules/address/factory";
import { AddressEntityInterface } from "@/core/address/address.entity.interface";
import { ClientEntity } from "@/app/modules/client/client.entity";

export class CreateClientWithAddressUseCase {
  constructor(private clientRepository: ClientRepositoryInterface) {
    this.clientRepository = clientRepository;
  }

  async execute(data: CreateClientWithAddressDtoInterface) {
    let addressessCreate: AddressEntityInterface[];
    const clientCreated = await this.clientRepository.create(data);
    await Promise.all([
      data.addresses.map(async (address) => {
        const addreess = await createAddressUseCase.execute({
          ...address,
          clientId: clientCreated.id,
        });
        addressessCreate.push(addreess);
      }),
    ]);
    return await this.clientRepository.findOne(clientCreated.id, {
      addresses: true,
    });
  }
}
