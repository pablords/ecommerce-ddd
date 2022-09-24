import { CreateClientDtoInterface } from "@/core/client/dto/create-client.dto.interface";
import { IsString, IsDate, IsEmail } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class CreateClientDto implements CreateClientDtoInterface {
  
    @IsString({ message: "Name is required" })
    @ApiProperty()
    name: string;

    @IsEmail({ message: "Email is required" })
    @ApiProperty()
    email: string;
  
    @IsDate()
    @ApiProperty()
    age: Date;
  
    @IsString({ message: "Document is required" })
    @ApiProperty()
    document: string;
}