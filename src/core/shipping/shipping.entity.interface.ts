import { BaseEntityInterface } from "../shared/base.entity.interface"

export interface ShippingEntityInterface extends BaseEntityInterface{
    cost: number
    addressId: string
    description: string
}