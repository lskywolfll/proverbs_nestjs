import { Test, TestingModule } from '@nestjs/testing';
import { ChatTelegramService } from '../chat_telegram.service';

describe('ChatTelegramService', () => {
  let service: ChatTelegramService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatTelegramService],
    }).compile();

    service = module.get<ChatTelegramService>(ChatTelegramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
