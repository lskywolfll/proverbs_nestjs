import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ReminderDto } from '../../reminder/dto/reminder-create.dto';
import { PreferenceStatus } from './preference.enum';
import { Type } from 'class-transformer';
import { User } from '../../user/entities/user.entity';

export class ChatTelegramDto {
  @ApiProperty({ description: 'chat_id for send messages' })
  @IsString()
  chat_id: number;

  @ApiProperty({ description: 'Method of response proverbs', example: 'TEXT' })
  @IsEnum(PreferenceStatus)
  preference: PreferenceStatus;

  @ApiProperty({
    description: 'Reminder of proverbs',
    example: { hour: 20, days: 'all', zone: 'CL' },
  })
  @IsNotEmpty()
  reminder: ReminderDto;

  @ApiProperty({ description: 'User of chat id' })
  @Type(() => User)
  user: User;
}
