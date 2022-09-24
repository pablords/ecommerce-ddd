import { AddressEntityInterface } from "../address/address.entity.interface";
import { ClientEntityInterface } from "./client.entity.interface";

export class ClientEntity implements ClientEntityInterface {
  id: string;
  name: string;
  email: string
  age: Date;
  document: string;
  createdAt: Date;
  addresses: AddressEntityInterface[]
  constructor({
    id,
    name,
    email,
    age,
    document,
    createdAt,
  }: ClientEntityInterface) {
    Object.assign(this, {
      id,
      name,
      email,
      age,
      document,
      createdAt,
    });
  }

  static create({
    id,
    name,
    email,
    age,
    document,
    createdAt,
  }: ClientEntityInterface) {
    const createdClient = new ClientEntity({
      id,
      name,
      email,
      age,
      document,
      createdAt,
    });
    return createdClient;
  }
}
