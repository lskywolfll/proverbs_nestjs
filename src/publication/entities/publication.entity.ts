import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Proverb } from '../../proverb/entities/proverb.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Publication {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'identify publication' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Date of the publication' })
  date: Date;

  @Column()
  @ApiProperty({ description: 'Date of the last update publication' })
  last_update: Date;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne((type) => Proverb, (proverb) => proverb)
  proverb: Proverb;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne((type) => User, (user) => user)
  user: User;
}
