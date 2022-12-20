import { PartialType } from '@nestjs/swagger';
import { ChatTelegramDto } from './chat_telegram.dto';

export class ChatTelegramDtoFilter extends PartialType(ChatTelegramDto) {}
