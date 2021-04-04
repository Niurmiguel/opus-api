import { Length, IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateJobtypeDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  @ApiProperty({
    minLength: 5,
    maxLength: 20
  })
  name: string;
}
