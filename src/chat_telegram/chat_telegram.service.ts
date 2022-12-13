import { ChatTelegramRepository } from './chat_telegram.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ReminderRepository } from '../reminder/reminder.repository';
import { ChatTelegramDto } from './dto/chat_telegram.dto';

@Injectable()
export class ChatTelegramService {
  constructor(
    private readonly chatTelegramRepository: ChatTelegramRepository,
    private readonly reminderRepository: ReminderRepository,
  ) {}

  async create(chatTelegramDto: ChatTelegramDto) {
    try {
      //   const isChatIdExist =
      //     this.chatTelegramRepository.findByChatID(chatTelegramDto);
      //   if (isChatIdExist) {
      //     throw new BadRequestException('The chat_id is already created');
      //   }
      const parsedReminder: any = chatTelegramDto.reminder;
      chatTelegramDto.reminder = JSON.parse(parsedReminder);
      const newReminder = this.reminderRepository.create({
        ...chatTelegramDto.reminder,
      });
      const reminderSave = await this.reminderRepository.save(newReminder);

      const chatTelegram = await this.chatTelegramRepository.create({
        chat_id: chatTelegramDto.chat_id,
        preference: chatTelegramDto.preference,
        reminder: reminderSave,
      });
      return await this.chatTelegramRepository.save(chatTelegram);
    } catch (error) {
      return error;
    }
  }
}
