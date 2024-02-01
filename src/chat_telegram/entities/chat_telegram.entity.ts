import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Reminder } from '../../reminder/entities/reminder.entity';
import { User } from '../../user/entities/user.entity';
import { PreferenceStatus } from '../dto/preference.enum';

@Entity()
export class Chat_Telegram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chat_id: number;

  @Column({
    type: 'enum',
    enum: PreferenceStatus,
  })
  preference: PreferenceStatus;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @JoinColumn()
  @OneToOne((type) => Reminder, (reminder) => reminder)
  reminder: Reminder;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne((type) => User, (user) => user)
  user: User;
}
