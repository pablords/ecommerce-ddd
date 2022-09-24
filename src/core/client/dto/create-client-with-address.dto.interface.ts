import { AddressEntityInterface } from "@/core/address/address.entity.interface";
import { CreateClientDtoInterface } from "./create-client.dto.interface";

export interface CreateClientWithAddressDtoInterface extends CreateClientDtoInterface{
    addresses: AddressEntityInterface[]
}