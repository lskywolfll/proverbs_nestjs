import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { FilterDto } from './dto/filter.dto';
import { ProverbsRepository } from './proverb.repository';

@Injectable()
export class ProverbService {
  constructor(
    @InjectRepository(ProverbsRepository)
    private readonly proverbRepository: ProverbsRepository,
  ) {}

  findAll(filterDto: FilterDto) {
    return this.proverbRepository.getAllProverbs(filterDto);
  }

  findAllByAuthor(filterDto: FilterDto, author: string) {
    return this.proverbRepository.getProverb(filterDto, author);
  }

  create(createProverbDto: CreateProverbDto) {
    const proverb = this.proverbRepository.create({ ...createProverbDto });
    return this.proverbRepository.save(proverb);
  }
}
