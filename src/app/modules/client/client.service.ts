import { Injectable } from "@nestjs/common";
import { CreateClientWithAddressDto } from "./dto/create-client-with-address.dto";
import { CreateClientDto } from "./dto/create-client.dto";
import { createClientUseCase, getOneClientUseCase, createClientWithAddressUseCase } from "../../../core/client/factory";

@Injectable()
export class ClientService {
  async create(createClient: CreateClientDto) {
    return await createClientUseCase.execute(createClient);
  }

  async findOne(id: string) {
    return await getOneClientUseCase.execute(id);
  }

  async createWithAddress(data: CreateClientWithAddressDto){
    return await createClientWithAddressUseCase.execute(data)
  }
}
