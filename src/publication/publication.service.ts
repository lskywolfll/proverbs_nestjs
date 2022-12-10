import { Injectable } from '@nestjs/common';
import { PublicationRepository } from './publication.repository';

@Injectable()
export class PublicationService {
  constructor(private readonly proverbRepository: PublicationRepository) {}

  getAll() {
    return this.proverbRepository.find();
  }
}
