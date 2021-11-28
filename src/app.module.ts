import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProverbModule } from './proverb/proverb.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ProverbModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.19.0.2',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'proverbs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
