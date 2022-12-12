import { Test, TestingModule } from '@nestjs/testing';
import { ChatTelegramController } from '../chat_telegram.controller';

describe('ChatTelegramController', () => {
  let controller: ChatTelegramController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatTelegramController],
    }).compile();

    controller = module.get<ChatTelegramController>(ChatTelegramController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
