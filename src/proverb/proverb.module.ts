import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProverbController } from './proverb.controller';
import { ProverbsRepository } from './proverb.repository';
import { ProverbService } from './proverb.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProverbsRepository])],
  controllers: [ProverbController],
  providers: [ProverbService],
})
export class ProverbModule {}
