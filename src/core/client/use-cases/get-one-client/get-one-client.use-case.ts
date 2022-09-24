import { ClientRepository } from "../../repository/client.repository";

export class GetOneClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(id: string) {
    return await this.clientRepository.findOne(id)
  }
}
