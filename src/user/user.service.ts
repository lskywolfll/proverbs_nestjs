import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findByID(id: number) {
    const found = await this.userRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`The id '${id}' not found.`);
    }

    return found;
  }

  async deletedById(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`The user ID '${id}' not found.`);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const update = await this.userRepository.update(id, updateUserDto);
    if (update.affected === 0) {
      throw new NotFoundException(`The user ID '${id}' not found.`);
    }
  }
}
