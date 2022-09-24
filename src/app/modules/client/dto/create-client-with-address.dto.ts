import { AddressEntity } from "@/core/address/address.entity";
import { ApiProperty } from "@nestjs/swagger";
import { CreateClientDto } from "./create-client.dto";


export class CreateClientWithAddressDto extends CreateClientDto {
  @ApiProperty({
    // type: "array",
    // items: {
    //   type: 'object',
    //   properties: {
    //     id: {
    //       type: "number",
    //     },
    //     phone: {
    //       type: "number",
    //     },
    //     address: {
    //       type: "string",
    //     },
    //     email: {
    //       type: "string",
    //     },
    //     partnerId: {
    //       type: "number",
    //     },
    //     createdAt: {
    //       type: "string",
    //     },
    //     updatedAt: {
    //       type: "string",
    //     },
    //   },
    // },
    isArray: true
  })
  addresses: AddressEntity[];
}
