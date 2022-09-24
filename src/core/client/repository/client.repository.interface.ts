import { CreateClientDtoInterface } from "../dto/create-client.dto.interface";
import { ClientEntityInterface } from "../client.entity.interface";
import { BaseRepositoryInterface } from "@/core/shared/base.repository.interface";
import { CreateClientWithAddressDtoInterface } from "../dto/create-client-with-address.dto.interface";

export interface ClientRepositoryInterface extends BaseRepositoryInterface {
  create(data: CreateClientDtoInterface): Promise<ClientEntityInterface>
  createWithAddress(data: CreateClientWithAddressDtoInterface): Promise<ClientEntityInterface>
}
