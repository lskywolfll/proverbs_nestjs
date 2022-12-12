import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Preference_Chat } from './entities/preference_chat.entity';

@Injectable()
export class PreferenceChatRepository extends Repository<Preference_Chat> {
  constructor(private dataSource: DataSource) {
    super(Preference_Chat, dataSource.createEntityManager());
  }

  async firstWhere(
    column: string,
    value: string | number,
    operator = '=',
  ): Promise<Preference_Chat | undefined> {
    return await this.createQueryBuilder()
      .where(`Preference_Chat.${column} ${operator} :value`, { value: value })
      .getOne();
  }
}
