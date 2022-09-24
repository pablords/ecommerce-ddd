import { CreateAddressDtoInterface } from "../dto/create-address.dto.interface";
import { AddressRepositoryInterface } from "../repository/address.repository.interface";

export class CreateAddressUseCase {
  constructor(private addressRepository: AddressRepositoryInterface) {}

  async execute(data: CreateAddressDtoInterface){
    return await this.addressRepository.create(data)
  }
}
