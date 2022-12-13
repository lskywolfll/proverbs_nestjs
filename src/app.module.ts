import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProverbModule } from './proverb/proverb.module';
import { UserModule } from './user/user.module';
import { ChatTelegramModule } from './chat_telegram/chat_telegram.module';
import { ReminderModule } from './reminder/reminder.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get('DB_HOSTNAME'),
          port: config.get('DB_PORT'),
          username: config.get('DB_USER'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_DATABASE'),
          entities: [],
          synchronize: true,
          autoLoadEntities: true,
          logging: true,
        };
      },
    }),
    UserModule,
    ProverbModule,
    ChatTelegramModule,
    ReminderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
