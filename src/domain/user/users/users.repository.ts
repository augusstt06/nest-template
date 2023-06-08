import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { CreateUserDTO } from '../dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private usersRepository: Repository<Users>) {}

  createUser(createUserDto: CreateUserDTO) {
    const newUser = this.usersRepository.create({ ...createUserDto });
    return this.usersRepository.save(newUser);
  }
}
