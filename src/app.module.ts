import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProverbModule } from './proverb/proverb.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CacheModule.register(),
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
    ProverbModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
