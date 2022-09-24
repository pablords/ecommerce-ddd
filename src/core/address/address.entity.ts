import { AddressEntityInterface } from "./address.entity.interface";

export class AddressEntity implements AddressEntityInterface {
  id: string;
  clientId?: string
  number: number;
  district: string;
  complement: string;
  city: string;
  uf: string;
  country: string;
  zipCode: number;
  createdAt: Date;
  constructor({
    id,
    clientId,
    number,
    district,
    city,
    complement,
    country,
    createdAt,
    uf,
    zipCode,
  }: AddressEntityInterface) {
    return Object.assign(this, {
      id,
      clientId,
      number,
      district,
      city,
      complement,
      country,
      createdAt,
      uf,
      zipCode,
    });
  }

  static create({
    id,
    clientId,
    number,
    district,
    city,
    complement,
    country,
    createdAt,
    uf,
    zipCode,
  }: AddressEntity) {
    const address = new AddressEntity({
      id,
      clientId,
      number,
      district,
      city,
      complement,
      country,
      createdAt,
      uf,
      zipCode,
    });

    return address;
  }
}
