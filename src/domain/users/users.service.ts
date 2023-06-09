import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async findAllUsers() {
    return await this.usersRepository.find();
  }

  createUser(userDto: UserDto) {
    return this.usersRepository.createUser(userDto);
  }
  async updateUser(id: number, userDto: UserDto) {
    return await this.usersRepository.updateUser(id, userDto);
  }
  async deleteUser(id: number) {
    return this.usersRepository.deleteUser(id);
  }
}
