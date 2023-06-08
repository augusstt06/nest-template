import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/users.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

// Repository 자체를 extends
@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  findAllUsers() {
    return this.find();
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.create({ ...createUserDto });
    return this.save(newUser);
  }
}
