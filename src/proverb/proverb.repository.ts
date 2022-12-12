import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Proverb } from './entities/proverb.entity';
import { FilterDto } from './dto/filter.dto';
import { InternalServerErrorException } from '@nestjs/common';

// function between(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

@Injectable()
export class ProverbsRepository extends Repository<Proverb> {
  constructor(private dataSource: DataSource) {
    super(Proverb, dataSource.createEntityManager());
  }

  async getAllProverbs(filterDto: FilterDto): Promise<Proverb[]> {
    const { author, content, proverbs_ids } = filterDto;
    const query = this.createQueryBuilder('proverb');

    if (author && content) {
      query.where(
        `
        (LOWER(proverb.content) LIKE LOWER(:content) OR LOWER(proverb.author) LIKE LOWER(:author) )
      `,
        {
          content: `%${content}%`,
          author: `%${author}%`,
        },
      );
    } else if (!author && content) {
      query.where(
        `
        (LOWER(proverb.content) LIKE LOWER(:content))
      `,
        {
          content: `%${content}%`,
        },
      );
    } else if (author && !content) {
      query.where(
        `
        (LOWER(proverb.author) LIKE LOWER(:author))
      `,
        {
          author: `%${author}%`,
        },
      );
    }

    if (proverbs_ids) {
      query.andWhere(
        `
        proverb.id NOT IN (${proverbs_ids.map((p) => p)})
      `,
        {},
      );
    }

    try {
      // const count = await query.getManyAndCount();
      // query.skip(between(1, count));
      // query.limit(limit || 10);
      const proverbs = await query.getMany();
      return proverbs;
    } catch (error) {
      throw new InternalServerErrorException(error, 'Error by getAll Proverbs');
    }
  }

  async getProverb(filterDto: FilterDto): Promise<Proverb[]> {
    const { content, author } = filterDto;
    const query = this.createQueryBuilder('proverb');
    query.where({ author });

    if (content) {
      query.andWhere(
        `
        (LOWER(proverb.content) LIKE LOWER(:content))
      `,
        {
          content: `%${content}%`,
        },
      );
    }

    try {
      const proverbs = await query.getMany();
      return proverbs;
    } catch (error) {
      throw new InternalServerErrorException(
        error,
        'Error inside getProverbs by author with filters',
      );
    }
  }
}
