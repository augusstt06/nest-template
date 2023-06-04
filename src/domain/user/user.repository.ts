import { Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private userRepository: Repository<User>) {}

  async findUser(option: FindOneOptions<User>) {
    return await this.userRepository.findOne(option);
  }
}
