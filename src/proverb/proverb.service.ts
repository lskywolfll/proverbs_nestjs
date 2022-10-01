import { Injectable } from '@nestjs/common';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { FilterDto } from './dto/filter.dto';
import { ProverbsRepository } from './proverb.repository';

@Injectable()
export class ProverbService {
  constructor(private readonly proverbRepository: ProverbsRepository) {}

  findAll(filterDto: FilterDto) {
    return this.proverbRepository.getAllProverbs(filterDto);
  }

  findAllByAuthor(filterDto: FilterDto) {
    return this.proverbRepository.getProverb(filterDto);
  }

  create(createProverbDto: CreateProverbDto) {
    const proverb = this.proverbRepository.create({ ...createProverbDto });
    return this.proverbRepository.save(proverb);
  }
}
