import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proverb {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'identifier' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Content for proverb' })
  content: string;

  @Column()
  @ApiProperty({ description: 'Author of the content' })
  author: string;

  @Column({ nullable: true })
  @ApiProperty({ description: 'Url of the content' })
  image: string;
}
