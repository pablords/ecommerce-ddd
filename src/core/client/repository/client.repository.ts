import { Repository } from "typeorm";
import { ClientEntityInterface } from "../client.entity.interface";
import { CreateClientWithAddressDtoInterface } from "../dto/create-client-with-address.dto.interface";
import { CreateClientDtoInterface } from "../dto/create-client.dto.interface";
import { ClientRepositoryInterface } from "./client.repository.interface";
import { AddressEntity } from "@/core/address/address.entity";
import { ClientEntity } from "../client.entity";
import { AddressEntityInterface } from "@/core/address/address.entity.interface";
import { Relation } from "@/core/shared/base.repository.interface";

export class ClientRepository implements ClientRepositoryInterface {
  constructor(private ormRepository: Repository<ClientEntityInterface>) {}

  async create(data: CreateClientDtoInterface): Promise<ClientEntityInterface> {
    const client = this.ormRepository.create(data);
    return await this.ormRepository.save(client);
  }

  async find(filter: any): Promise<ClientEntityInterface[]> {
    return await this.ormRepository.find(filter);
  }

  async findOne(
    id: string,
    relation?: Relation
  ): Promise<ClientEntityInterface> {
    return await this.ormRepository.findOne({
      where: { id },
      relations: relation,
    });
  }

  async update(id: string, data: any): Promise<any> {
    return await this.ormRepository.update(id, data);
  }

  async delete(id: string): Promise<any> {
    return await this.ormRepository.delete(id);
  }

  async createWithAddress(
    data: CreateClientWithAddressDtoInterface
  ): Promise<ClientEntityInterface> {
    const listAddress: AddressEntityInterface[] = [];
    return this.create(data);
  }
}
