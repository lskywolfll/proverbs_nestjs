import { Module } from '@nestjs/common';
import { ChatTelegramController } from './chat_telegram.controller';
import { ChatTelegramService } from './chat_telegram.service';
import { ChatTelegramRepository } from './chat_telegram.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat_Telegram } from './entities/chat_telegram.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chat_Telegram])],
  controllers: [ChatTelegramController],
  providers: [ChatTelegramService, ChatTelegramRepository],
})
export class ChatTelegramModule {}
