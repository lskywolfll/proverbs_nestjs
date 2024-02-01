import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatTelegramService } from './chat_telegram.service';
import { ChatTelegramDto } from './dto/chat_telegram.dto';
import { ChatTelegramDtoFilter } from './dto/chat_telegram-filters.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('chat-telegram')
@ApiTags('chat-telegram')
export class ChatTelegramController {
  constructor(private chatTelegramService: ChatTelegramService) {}

  @Get()
  getAllChats() {
    return this.chatTelegramService.getAllChats();
  }

  @Get('/chat_id')
  findByChatID(@Body() chatTelegramDto: ChatTelegramDtoFilter) {
    return this.chatTelegramService.findByChatID(chatTelegramDto);
  }

  @Post()
  create(@Body() chatTelegramDto: ChatTelegramDto) {
    return this.chatTelegramService.create(chatTelegramDto);
  }
}
