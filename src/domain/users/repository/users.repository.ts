import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/users.entity';
import { DataSource, Repository } from 'typeorm';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findAllUsers() {
    const users = await this.find();
    return users;
  }

  createUser(userDto: UserDto) {
    const newUser = this.create({ ...userDto });

    return this.save(newUser);
  }

  async updateUser(id: number, userDto: UserDto) {
    return await this.update({ id }, { ...userDto });
  }

  async deleteUser(id: number) {
    return await this.delete(id);
  }
}
