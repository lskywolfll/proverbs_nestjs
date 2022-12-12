import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateProverbDto {
  @ApiProperty({ description: 'content of proverb' })
  @IsString()
  content: string;

  @ApiProperty({ description: 'author of content' })
  @IsString()
  author: string;

  @ApiProperty({ description: 'url of the origin image cloud' })
  @IsOptional()
  @IsString()
  image: string;
}
