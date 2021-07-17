import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proverb } from './entities/proverb.entity';

@Injectable()
export class ProverbService {
  constructor(
    @InjectRepository(Proverb)
    private proverbRepository: Repository<Proverb>,
  ) {}

  create() {}
}
