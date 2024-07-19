import { ApiProperty } from '@nestjs/swagger';

export class UserLoginDto {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  passWord: string;
}
