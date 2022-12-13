import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Reminder } from './entities/reminder.entity';

@Injectable()
export class ReminderRepository extends Repository<Reminder> {
  constructor(private dataSource: DataSource) {
    super(Reminder, dataSource.createEntityManager());
  }
}
