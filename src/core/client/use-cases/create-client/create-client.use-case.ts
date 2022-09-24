import { ClientEntity } from "../../client.entity";
import { CreateClientDtoInterface } from "../../dto/create-client.dto.interface";
import { ClientRepositoryInterface } from "../../repository/client.repository.interface";

export class CreateClientUseCase {
  constructor(private repository: ClientRepositoryInterface) {}

  async execute(data: CreateClientDtoInterface) {
    const client = ClientEntity.create(data);
    return await this.repository.create(client);
  }
}
