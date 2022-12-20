import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ReminderDto } from '../../reminder/dto/reminder-create.dto';
import { PreferenceStatus } from './preference.enum';

const days = 'monday,tuesday,wednesday,thursday,friday,saturday,sunday';

export class ChatTelegramDto {
  @ApiProperty({ description: 'chat_id for send messages' })
  @IsString()
  chat_id: number;

  @ApiProperty({ description: 'Method of response proverbs', example: 'TEXT' })
  @IsEnum(PreferenceStatus)
  preference: PreferenceStatus;

  @ApiProperty({
    description: 'Reminder of proverbs',
    example: { hour: 20, days, zone: 'CL' },
  })
  @IsNotEmpty()
  reminder: ReminderDto;
}
