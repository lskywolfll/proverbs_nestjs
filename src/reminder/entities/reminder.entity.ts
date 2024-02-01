import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { daysReminder } from '../../utils/index';

@Entity()
export class Reminder {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'identifier' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Hour of reminder the proverbs' })
  hour: number;

  @Column()
  @ApiProperty({
    description: 'Days of reminder on week',
    example: 'all',
  })
  days: daysReminder;

  @Column()
  @ApiProperty({ description: 'Zone of the time' })
  zone: string;
}
