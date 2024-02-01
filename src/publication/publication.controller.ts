import { Controller, Get } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('publication')
@ApiTags('publication')
export class PublicationController {
  constructor(private publicationService: PublicationService) {}

  @Get()
  getAll() {
    return this.publicationService.getAll();
  }
}
