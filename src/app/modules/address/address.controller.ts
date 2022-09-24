import { CreateAddressDto } from "./dto/create-address.dto";
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from "@nestjs/common";
import { AddressService } from "./address.service";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { BusinessError } from "@/core/errors/business.error";

@ApiTags("address")
@Controller("address")
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  @ApiBody({ type: CreateAddressDto })
  async create(@Body() createAddres: CreateAddressDto) {
    return await this.addressService.create(createAddres);
  }

  @Get(":id")
  @ApiParam({ name: "id" })
  async getOneClient(@Param("id") id: string) {
    try {
      return await this.addressService.findOne(id);
    } catch (err) {
      throw new HttpException(BusinessError.ENTITY_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
