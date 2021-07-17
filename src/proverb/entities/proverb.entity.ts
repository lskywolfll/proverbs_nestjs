import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proverb {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  author: string;
}
