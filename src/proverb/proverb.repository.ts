import { EntityRepository, Repository } from 'typeorm';
import { Proverb } from './entities/proverb.entity';
import { FilterDto } from './dto/filter.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Proverb)
export class ProverbsRepository extends Repository<Proverb> {
  async getAllProverbs(filterDto: FilterDto): Promise<Proverb[]> {
    const { author, content } = filterDto;
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

    try {
      const proverbs = await query.getMany();
      return proverbs;
    } catch (error) {
      throw new InternalServerErrorException(error, 'Error by getAll Proverbs');
    }
  }

  async getProverb(filterDto: FilterDto, author: string): Promise<Proverb[]> {
    const { content } = filterDto;
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
