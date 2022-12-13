import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    example: 'monday,tuesday,wednesday,thursday,friday,saturday,sunday',
  })
  days: string;

  @Column()
  @ApiProperty({ description: 'Zone of the time' })
  zone: string;
}
