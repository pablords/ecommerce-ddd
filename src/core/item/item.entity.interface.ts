import { BaseEntityInterface } from "../shared/base.entity.interface"

export interface ItemEntityInterface extends BaseEntityInterface{
    orderId: string
    productId: string
    amount: number
}