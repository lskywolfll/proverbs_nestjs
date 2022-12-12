import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Chat_Telegram } from './entities/chat_telegram.entity';

@Injectable()
export class ChatTelegramRepository extends Repository<Chat_Telegram> {
  constructor(private dataSource: DataSource) {
    super(Chat_Telegram, dataSource.createEntityManager());
  }
}
