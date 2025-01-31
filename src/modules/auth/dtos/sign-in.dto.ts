import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class SignInDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  password: string;
}
