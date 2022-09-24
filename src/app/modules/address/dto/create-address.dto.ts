import { CreateAddressDtoInterface } from "@/core/address/dto/create-address.dto.interface";
import { IsString, IsUUID, IsDate, IsNumber, isUUID } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class CreateAddressDto implements CreateAddressDtoInterface {
  
    @IsString({ message: "city is required" })
    @ApiProperty()
    city: string;

    @ApiProperty()
    clientId?: string;

    @IsString({ message: "complement is required" })
    @ApiProperty()
    complement: string;

    @IsString({ message: "country is required" })
    @ApiProperty()
    country: string;

    @IsString({ message: "district is required" })
    @ApiProperty()
    district: string;

    @IsNumber()
    @ApiProperty()
    number: number;

    @IsString({ message: "uf is required" })
    @ApiProperty()
    uf: string;

    @IsString({ message: "zipCode is required" })
    @ApiProperty()
    zipCode: number;

}