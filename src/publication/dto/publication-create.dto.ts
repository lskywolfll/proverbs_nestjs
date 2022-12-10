import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';
import { CreateProverbDto } from '../../proverb/dto/create-proverb.dto';
import { User } from '../../user/entities/user.entity';

export class CreatePublcationDto {
  @IsOptional()
  @IsDate()
  date: Date;

  @IsOptional()
  @IsDate()
  last_update: Date;

  @Type(() => CreateProverbDto)
  proverb: CreateProverbDto;

  @Type(() => User)
  user: User;
}
