import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProverbDto {
  @ApiProperty()
  @IsString()
  content: string;
  @ApiProperty()
  @IsString()
  author: string;
}
