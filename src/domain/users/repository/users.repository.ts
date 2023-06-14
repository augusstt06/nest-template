import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/users/user.entity';
import { DataSource, Repository } from 'typeorm';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UsersRepository extends Repository<UserEntity> {
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async findAllUsers() {
    const users = await this.find({ relations: ['profile', 'board'] });
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
