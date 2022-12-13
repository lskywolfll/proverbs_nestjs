import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Reminder } from '../../reminder/entities/reminder.entity';

@Entity()
export class Chat_Telegram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chat_id: string;

  @Column()
  preference: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne(() => Reminder)
  @JoinColumn()
  reminder: Reminder;
}
