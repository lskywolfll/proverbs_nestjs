import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Chat_Telegram } from './entities/chat_telegram.entity';
import { ChatTelegramDto } from './dto/chat_telegram.dto';
import { ChatTelegramDtoFilter } from './dto/chat_telegram-filters.dto';

@Injectable()
export class ChatTelegramRepository extends Repository<Chat_Telegram> {
  constructor(private dataSource: DataSource) {
    super(Chat_Telegram, dataSource.createEntityManager());
  }

  async findByChatID(
    chatTelegramDto: ChatTelegramDto | ChatTelegramDtoFilter,
  ): Promise<Chat_Telegram> {
    const query = this.createQueryBuilder('chat-telegram');
    query.where(`
     chat-telegram.chat_id = ${chatTelegramDto.chat_id}
    `);

    try {
      const exist = await query.getOne();
      return exist;
    } catch (error) {
      return error;
    }
  }
}
