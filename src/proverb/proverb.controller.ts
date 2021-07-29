import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProverbDto } from './dto/create-proverb.dto';
import { Proverb } from './entities/proverb.entity';
import { ProverbService } from './proverb.service';

@Controller('proverb')
@ApiTags('proverbs')
export class ProverbController {
  constructor(private proverbService: ProverbService) {}

  @Get()
  @ApiResponse({ status: HttpStatus.OK, description: 'ok', type: [Proverb] })
  getAll(): Promise<Proverb[]> {
    return this.proverbService.findAll();
  }

  @Post()
  createProverb(@Body() createProverbDto: CreateProverbDto) {
    return this.proverbService.create(createProverbDto);
  }
}
