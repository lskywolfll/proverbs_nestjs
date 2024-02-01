import { IsNumber, IsPostalCode, IsString } from 'class-validator';
import { daysReminder } from 'src/utils';

export class ReminderDto {
  @IsNumber()
  hour: number;

  @IsString()
  days: daysReminder;

  @IsPostalCode()
  zone: string;
}
