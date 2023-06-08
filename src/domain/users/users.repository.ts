import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/users.entity';
import { DataSource, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

// Repository 자체를 extends
@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findAllUsers() {
    return await this.find();
  }

  createUser(userDto: UserDto) {
    const newUser = this.create({ ...userDto });
    return this.save(newUser);
  }

  async deleteUser(id: number) {
    return await this.delete(id);
  }
}
