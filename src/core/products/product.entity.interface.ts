import { BaseEntityInterface } from "../shared/base.entity.interface"

export interface ProductEntityInterface extends BaseEntityInterface{
    price: number
    categories?: string[]
    name: string
    description?: string
}