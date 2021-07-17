import { Module } from '@nestjs/common';
import { ProverbController } from './proverb.controller';
import { ProverbService } from './proverb.service';

@Module({
  controllers: [ProverbController],
  providers: [ProverbService]
})
export class ProverbModule {}
