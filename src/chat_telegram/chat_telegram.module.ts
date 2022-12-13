import { Module } from '@nestjs/common';
import { ChatTelegramController } from './chat_telegram.controller';
import { ChatTelegramService } from './chat_telegram.service';
import { ChatTelegramRepository } from './chat_telegram.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat_Telegram } from './entities/chat_telegram.entity';
import { Reminder } from '../reminder/entities/reminder.entity';
import { ReminderRepository } from '../reminder/reminder.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Chat_Telegram, Reminder])],
  controllers: [ChatTelegramController],
  providers: [ChatTelegramService, ChatTelegramRepository, ReminderRepository],
})
export class ChatTelegramModule {}
