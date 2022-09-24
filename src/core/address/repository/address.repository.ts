import { Repository } from "typeorm";
import { AddressEntityInterface } from "../address.entity.interface";
import { CreateAddressDtoInterface } from "../dto/create-address.dto.interface";
import { AddressRepositoryInterface } from "./address.repository.interface";

export class AddressRepository implements AddressRepositoryInterface {
  constructor(private ormRepository: Repository<AddressEntityInterface>) {}

  async create(data: CreateAddressDtoInterface): Promise<AddressEntityInterface> {
    const client = this.ormRepository.create(data);
    return await this.ormRepository.save(client);
  }

  async find(filter: any): Promise<AddressEntityInterface[]> {
    return await this.ormRepository.find(filter);
  }

  async findOne(id: string): Promise<AddressEntityInterface> {
    return await this.ormRepository.findOne({ where: { id } });
  }

  async update(id: string, data: any): Promise<any> {
    return await this.ormRepository.update(id, data);
  }

  async delete(id: string): Promise<any> {
    return await this.ormRepository.delete(id);
  }
}
