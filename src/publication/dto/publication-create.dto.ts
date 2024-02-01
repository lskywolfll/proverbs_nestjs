import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';
import { CreateProverbDto } from '../../proverb/dto/create-proverb.dto';
import { User } from '../../user/entities/user.entity';

export class CreatePublcationDto {
  @ApiProperty({ description: 'Generate a date of creation publication' })
  @IsOptional()
  @IsDate()
  date: Date;

  @ApiProperty({ description: 'Last Update publication' })
  @IsOptional()
  @IsDate()
  last_update: Date;

  @ApiProperty({ description: 'Content of creating new proverb' })
  @Type(() => CreateProverbDto)
  proverb: CreateProverbDto;

  @ApiProperty({ description: 'Created by user' })
  @Type(() => User)
  user: User;
}
