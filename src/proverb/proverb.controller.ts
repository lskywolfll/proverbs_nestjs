import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { Proverb } from './entities/proverb.entity';
import { ProverbService } from './proverb.service';

@Controller('proverb')
export class ProverbController {
  constructor(private proverbService: ProverbService) {}

  @Get()
  getAll(): Promise<Proverb[]> {
    return this.proverbService.findAll();
  }

  @Post()
  createProverb(@Body() createProverbDto: CreateProverbDto) {
    return this.proverbService.create(createProverbDto);
  }
}
