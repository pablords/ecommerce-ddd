import { CreateClientDto } from "./dto/create-client.dto";
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from "@nestjs/common";
import { ClientService } from "./client.service";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { BusinessError } from "@/core/errors/business.error";
import { CreateClientWithAddressDto } from "./dto/create-client-with-address.dto";

@ApiTags("clients")
@Controller("clients")
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post()
  @ApiBody({ type: CreateClientDto })
  async create(@Body() createClient: CreateClientDto) {
    return await this.clientService.create(createClient);
  }

  @Get(":id")
  @ApiParam({ name: "id" })
  async getOneClient(@Param("id") id: string) {
    try {
      return await this.clientService.findOne(id);
    } catch (err) {
      throw new HttpException(
        BusinessError.ENTITY_NOT_FOUND,
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Post("/client-with-address")
  @ApiBody({ type: CreateClientWithAddressDto })
  async createWithAddress(@Body() createClientWithAddress:  CreateClientWithAddressDto) {
    return await this.clientService.createWithAddress(createClientWithAddress)
  }
}
