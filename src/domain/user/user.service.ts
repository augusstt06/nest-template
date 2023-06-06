import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { userDetail } from './type/type';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  async findAllUser() {
    return await this.userRepository.findAllUser();
  }

  createUser(userDetail: userDetail) {
    console.log(userDetail, '서비스');
    return this.userRepository.createUser(userDetail);
  }
}
