import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { FilterDto } from './dto/filter.dto';
import { Proverb } from './entities/proverb.entity';
import { ProverbService } from './proverb.service';

@Controller('proverb')
@ApiTags('proverb')
export class ProverbController {
  constructor(private readonly proverbService: ProverbService) {}

  @Get()
  getAllProverbsByFilter(@Body() filterDto: FilterDto): Promise<Proverb[]> {
    return this.proverbService.findAll(filterDto);
  }

  @Get('/:author')
  @ApiResponse({ status: HttpStatus.OK, description: 'ok', type: [Proverb] })
  getProverbsByFilter(@Query() filterDto: FilterDto): Promise<Proverb[]> {
    return this.proverbService.findAllByAuthor(filterDto);
  }

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, description: 'ok', type: Proverb })
  createProverb(@Body() createProverbDto: CreateProverbDto) {
    return this.proverbService.create(createProverbDto);
  }
}
