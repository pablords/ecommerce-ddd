import { BaseEntity } from "@/app/common/base.entity";
import { ClientEntityInterface } from "@/core/client/client.entity.interface";
import { Entity, Column, OneToMany } from "typeorm";
import { AddressEntity } from "@/app/modules/address/address.entity";

@Entity("clients")
export class ClientEntity extends BaseEntity implements ClientEntityInterface {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: Date;

  @Column()
  document: string;

  @OneToMany(() => AddressEntity, (address) => address.client.id)
  addresses: AddressEntity[];
}
