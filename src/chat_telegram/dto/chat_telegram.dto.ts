import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ReminderDto } from '../../reminder/dto/reminder-create.dto';
import { PreferenceStatus } from './preference.enum';

export class ChatTelegramDto {
  @ApiProperty({ description: 'chat_id for send messages' })
  @IsString()
  chat_id: number;

  @ApiProperty({ description: 'Method of response proverbs', example: 'TEXT' })
  @IsEnum(PreferenceStatus)
  preference: PreferenceStatus;

  @IsNotEmpty()
  reminder: ReminderDto;
}
