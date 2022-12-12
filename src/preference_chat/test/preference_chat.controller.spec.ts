import { Test, TestingModule } from '@nestjs/testing';
import { PreferenceChatController } from '../preference_chat.controller';

describe('PreferenceChatController', () => {
  let controller: PreferenceChatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreferenceChatController],
    }).compile();

    controller = module.get<PreferenceChatController>(PreferenceChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
