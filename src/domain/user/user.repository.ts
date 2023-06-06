import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { userDetail } from './type/type';

@Injectable()
export class UserRepository {
  constructor(private userRepository: Repository<User>) {}
  findAllUser() {
    return this.userRepository.find();
  }

  createUser(userDetail: userDetail) {
    console.log(userDetail, '레포');
    const newUser = this.userRepository.create({
      ...userDetail,
      createdAt: new Date(),
    });

    return this.userRepository.save(newUser);
  }
}
