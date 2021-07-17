import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { Proverb } from './entities/proverb.entity';

@Injectable()
export class ProverbService {
  constructor(
    @InjectRepository(Proverb)
    private proverbRepository: Repository<Proverb>,
  ) {}

  findAll() {
    return this.proverbRepository.find();
  }

  create(createProverbDto: CreateProverbDto) {
    const proverb = this.proverbRepository.create({ ...createProverbDto });
    return this.proverbRepository.save(proverb);
  }
}
