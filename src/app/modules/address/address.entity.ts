import { BaseEntity } from "@/app/common/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { AddressEntityInterface } from "@/core/address/address.entity.interface";
import { ClientEntity } from "@/app/modules/client/client.entity";

@Entity("address")
export class AddressEntity
  extends BaseEntity
  implements AddressEntityInterface
{
  @Column()
  number: number;

  @Column()
  clientId?: string;

  @Column()
  city: string;

  @Column()
  complement: string;

  @Column()
  country: string;

  @Column()
  district: string;

  @Column()
  uf: string;

  @Column()
  zipCode: number;

  @ManyToOne(() => ClientEntity, (client) => client.addresses)
  client: ClientEntity;
}
