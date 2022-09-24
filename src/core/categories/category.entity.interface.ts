import { BaseEntityInterface } from "../shared/base.entity.interface"

export interface CategoryEntityInterface extends BaseEntityInterface{
    name: string
    products?: string[]
    description?: string
}