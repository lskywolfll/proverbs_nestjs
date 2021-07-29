import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proverb {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'identifier' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Content for message value for all people' })
  content: string;

  @Column()
  @ApiProperty({ description: 'Author of the content' })
  author: string;
}
