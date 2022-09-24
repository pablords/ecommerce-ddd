import { BaseServiceInterface } from "@/app/common/base.service.interface";
import { Injectable } from "@nestjs/common";
import { CreateAddressDto } from "./dto/create-address.dto";
import { createAddressUseCase } from "./factory";

@Injectable()
export class AddressService implements Partial<BaseServiceInterface> {
  async create(data: CreateAddressDto): Promise<any> {
    return await createAddressUseCase.execute(data)
  }

  async findOne(id: string): Promise<any> {
      
  }
}
