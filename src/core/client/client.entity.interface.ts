import { AddressEntityInterface } from "../address/address.entity.interface"
import { BaseEntityInterface } from "../shared/base.entity.interface"

export interface ClientEntityInterface extends BaseEntityInterface{
    name: string
    email: string
    document: string
    age: Date
    addresses?: AddressEntityInterface[]
}