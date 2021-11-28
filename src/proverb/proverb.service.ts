import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { FilterDto } from './dto/filter.dto';
import { ProverbsRepository } from './proverb.repository';
import { defaultTimeSecondsTTL } from 'src/shared';
import { Proverb } from './entities/proverb.entity';

@Injectable()
export class ProverbService {
  constructor(
    @InjectRepository(ProverbsRepository)
    private readonly proverbRepository: ProverbsRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findAll(filterDto: FilterDto) {
    const resultCached: Proverb[] = await this.cacheManager.get('findAll');
    const result = await this.proverbRepository.getAllProverbs(filterDto);

    if (!resultCached) {
      await this.cacheManager.set('findAll', result, {
        ttl: defaultTimeSecondsTTL,
      });

      return result;
    } else {
      return resultCached;
    }
  }

  findAllByAuthor(filterDto: FilterDto, author: string) {
    return this.proverbRepository.getProverb(filterDto, author);
  }

  create(createProverbDto: CreateProverbDto) {
    const proverb = this.proverbRepository.create({ ...createProverbDto });
    return this.proverbRepository.save(proverb);
  }
}
