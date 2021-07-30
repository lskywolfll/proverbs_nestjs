import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { FilterDto } from './dto/filter.dto';
import { Proverb } from './entities/proverb.entity';
import { ProverbService } from './proverb.service';

@Controller('proverb')
@ApiTags('proverbs')
export class ProverbController {
  constructor(private proverbService: ProverbService) {}

  @Get('/:author')
  @ApiResponse({ status: HttpStatus.OK, description: 'ok', type: [Proverb] })
  getProverbsByFilter(
    @Query() filterDto: FilterDto,
    @Param('author') author: string,
  ): Promise<Proverb[]> {
    return this.proverbService.findAll(filterDto, author);
  }

  @Post()
  createProverb(@Body() createProverbDto: CreateProverbDto) {
    return this.proverbService.create(createProverbDto);
  }
}
