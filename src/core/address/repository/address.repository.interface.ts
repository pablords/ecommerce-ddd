import { CreateAddressDtoInterface } from "../dto/create-address.dto.interface";
import { AddressEntityInterface } from "../address.entity.interface";
import { BaseRepositoryInterface } from "@/core/shared/base.repository.interface";

export interface AddressRepositoryInterface extends BaseRepositoryInterface {
  create(data: CreateAddressDtoInterface): Promise<AddressEntityInterface>;
}
