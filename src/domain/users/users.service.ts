import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { UserDto } from './dto/user.dto';
import { ProfileDto } from './dto/profile.dto';
import { ProfileRepository } from './repository/profile.repository';
import { PostDto } from './dto/post.dto';
import { PostRepository } from './repository/post.repository';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    private profileRepository: ProfileRepository,
    private postRepository: PostRepository,
  ) {}

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
  async createUserProfile(id: number, profileDto: ProfileDto) {
    return await this.profileRepository.createUserProfile(id, profileDto);
  }

  // async createPost(id: number, postDto: PostDto) {
  //   return this.postRepository.createPost(id, postDto);
  // }
}
