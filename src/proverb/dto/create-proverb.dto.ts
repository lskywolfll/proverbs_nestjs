import { IsString } from 'class-validator';

export class CreateProverbDto {
  @IsString()
  content: string;
  @IsString()
  author: string;
}
