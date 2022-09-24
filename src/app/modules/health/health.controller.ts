import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { HealthService } from "./health.service";

@ApiTags('healthz')
@Controller("healthz")
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  async getStatus() {
    return this.healthService.getStatus();
  }
}
