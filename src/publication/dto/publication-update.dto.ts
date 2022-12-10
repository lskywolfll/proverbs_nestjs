import { PartialType } from '@nestjs/swagger';
import { CreatePublcationDto } from './publication-create.dto';

export class UpdatePublicationDto extends PartialType(CreatePublcationDto) {}
