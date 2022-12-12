import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Preference_Chat } from '../../preference_chat/entities/preference_chat.entity';

@Entity()
export class Chat_Telegram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chat_id: string;

  @Column()
  chat_id_group: string;

  @Column()
  hour_reminder: string;

  @Column()
  days_reminder: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne((type) => Preference_Chat, (preference) => preference.name)
  preference: Preference_Chat;
}
