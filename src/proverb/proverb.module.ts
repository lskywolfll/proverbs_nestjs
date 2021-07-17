import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proverb } from './entities/proverb.entity';
import { ProverbController } from './proverb.controller';
import { ProverbService } from './proverb.service';

@Module({
  imports: [TypeOrmModule.forFeature([Proverb])],
  controllers: [ProverbController],
  providers: [ProverbService],
})
export class ProverbModule {}
