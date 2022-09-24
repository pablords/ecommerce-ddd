import { ClientEntity } from "@/app/modules/client/client.entity";
import { AddressEntity } from "@/app/modules/address/address.entity";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: process.env.DB_ENGINE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [ClientEntity, AddressEntity],
  synchronize: true,
});

dataSource.initialize();

export const entityManager = dataSource.manager;
