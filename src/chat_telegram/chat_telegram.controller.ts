import { Body, Controller, Post } from '@nestjs/common';
import { ChatTelegramService } from './chat_telegram.service';
import { ChatTelegramDto } from './dto/chat_telegram.dto';

@Controller('chat-telegram')
export class ChatTelegramController {
  constructor(private chatTelegramService: ChatTelegramService) {}

  @Post()
  create(@Body() chatTelegramDto: ChatTelegramDto) {
    return this.chatTelegramService.create(chatTelegramDto);
  }
}
