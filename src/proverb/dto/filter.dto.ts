import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class FilterDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  author: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  skip: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  limit: number;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  proverbs_ids: number[];
}
