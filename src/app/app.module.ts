import "dotenv/config";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ClientModule } from "./modules/client/client.module";
import { HealthModule } from "./modules/health/health.module";
import { AddressModule } from "./modules/address/address.module";

@Module({
  imports: [ConfigModule.forRoot(), ClientModule, HealthModule, AddressModule],
})
export class AppModule {}
