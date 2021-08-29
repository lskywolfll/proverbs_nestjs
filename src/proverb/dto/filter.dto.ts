import { IsOptional, IsString } from 'class-validator';

export class FilterDto {
  @IsString()
  @IsOptional()
  content: string;

  @IsOptional()
  @IsString()
  author: string;
}
