import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

import { CreateUserDTO } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  createUser(createUserDto: CreateUserDTO) {
    return this.usersRepository.createUser(createUserDto);
  }
}
