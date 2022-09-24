import { BaseEntityInterface } from "../shared/base.entity.interface";

export interface AddressEntityInterface extends BaseEntityInterface {
  number: number;
  clientId?: string
  district: string;
  complement: string;
  city: string;
  uf: string;
  country: string;
  zipCode: number;
}
