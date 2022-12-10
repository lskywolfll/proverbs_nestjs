import { Controller, Get } from '@nestjs/common';
import { PublicationService } from './publication.service';

@Controller('publication')
export class PublicationController {
  constructor(private publicationService: PublicationService) {}

  @Get()
  getAll() {
    return this.publicationService.getAll();
  }
}
