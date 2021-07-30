import { EntityRepository, Repository } from 'typeorm';
import { Proverb } from './entities/proverb.entity';
import { FilterDto } from './dto/filter.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Proverb)
export class ProverbsRepository extends Repository<Proverb> {
  async getProverb(filterDto: FilterDto, author: string): Promise<Proverb[]> {
    const { content } = filterDto;
    // createQueryBuilder('alias')
    // el alias sirve para usar como referencia en tu query
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
      throw new InternalServerErrorException();
    }
  }
}
