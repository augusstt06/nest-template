import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { userDetail } from './type/type';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  findAllUser() {
    return this.userRepository.find();
  }

  createUser(userDetail: userDetail) {
    const newUser = this.userRepository.create({
      ...userDetail,
      createdAt: new Date(),
    });

    return this.userRepository.save(newUser);
  }
}
