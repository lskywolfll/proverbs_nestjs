import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Preference_Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
