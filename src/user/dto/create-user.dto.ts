import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  alias: string;
  @IsEmail()
  email: string;
  @IsString()
  @Length(8)
  password: string;
}
