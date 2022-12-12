import { PreferenceChatRepository } from './preference_chat.repository';
import { Module } from '@nestjs/common';
import { PreferenceChatController } from './preference_chat.controller';
import { PreferenceChatService } from './preference_chat.service';
import { Preference_Chat } from './entities/preference_chat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Preference_Chat])],
  controllers: [PreferenceChatController],
  providers: [PreferenceChatService, PreferenceChatRepository],
})
export class PreferenceChatModule {}
