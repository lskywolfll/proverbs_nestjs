import { IsNumber, IsPostalCode, IsString } from 'class-validator';

export class ReminderDto {
  @IsNumber()
  hour: number;

  @IsString()
  days: string;

  @IsPostalCode()
  zone: string;
}
