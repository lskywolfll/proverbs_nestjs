import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class ReminderService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  addNewJob(jobName: string, time: string) {
    const job = new CronJob(`${time} * * * * *`, () => {
      console.log(`time (${time}) for job ${jobName} to run!`);
    });

    this.schedulerRegistry.addCronJob(jobName, job);
    job.start();

    console.log(`Job ${jobName} added for every ${time} seconds`);
  }

  deleteCron(name: string) {
    this.schedulerRegistry.deleteCronJob(name);
    console.log(`job ${name} deleted!`);
  }

  getCrons() {
    const jobs = this.schedulerRegistry.getCronJobs();
    jobs.forEach((value, key, map) => {
      let next;
      try {
        next = value.nextDates();
      } catch (e) {
        next = 'error: next fire date is in the past!';
      }
      console.log(`job: ${key} -> next: ${next}`);
    });
  }
}
