import { Test, TestingModule } from '@nestjs/testing';
import { ProverbController } from '../proverb.controller';

describe('ProverbController', () => {
  let controller: ProverbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProverbController],
    }).compile();

    controller = module.get<ProverbController>(ProverbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
