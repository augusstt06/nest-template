import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { UserDto } from './dto/user.dto';
import { ProfileDto } from './dto/profile.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async findAllUsers() {
    return await this.usersRepository.findAllUsers();
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

  // async createUserProfile(id: number, profileDto: ProfileDto) {
  //   return await this.usersRepository.createUserProfile(id, profileDto);
  // }
}
