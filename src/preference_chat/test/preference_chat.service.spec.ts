import { Test, TestingModule } from '@nestjs/testing';
import { PreferenceChatService } from '../preference_chat.service';

describe('PreferenceChatService', () => {
  let service: PreferenceChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreferenceChatService],
    }).compile();

    service = module.get<PreferenceChatService>(PreferenceChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
