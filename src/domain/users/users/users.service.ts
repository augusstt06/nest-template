import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  findAllUsers() {
    return this.usersRepository.find();
  }

  createUser(createUserDto: CreateUserDto) {
    return this.usersRepository.createUser(createUserDto);
  }
}
