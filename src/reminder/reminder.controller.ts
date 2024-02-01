import { Controller, Get, Param } from '@nestjs/common';
import { ReminderService } from './reminder.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('reminder')
@ApiTags('Reminder')
export class ReminderController {
  constructor(private reminderService: ReminderService) {}

  @Get('/:seconds')
  getCronJob(@Param('seconds') seconds) {
    return this.reminderService.addNewJob('testingSeconds', seconds);
  }
}
