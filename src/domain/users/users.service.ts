import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { UserDto } from './dto/user.dto';
// import { ProfileDto } from './dto/profile.dto';
// import { ProfileRepository } from './repository/profile.repository';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    private usersRepository: UsersRepository,
    // private profileRepository: ProfileRepository,
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {}

  async findAllUsers() {
    return await this.usersRepository.findAllUsers();
  }

  async createUser(createUserDto: UserDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const user = this.usersRepository.createUser(createUserDto);
      await queryRunner.manager.save(user);
      await queryRunner.commitTransaction();
      return user;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
// createUser(userDto: UserDto) {
//   return this.usersRepository.createUser(userDto);
// }
//   async updateUser(id: number, userDto: UserDto) {
//     return await this.usersRepository.updateUser(id, userDto);
//   }
//   async deleteUser(id: number) {
//     return this.usersRepository.deleteUser(id);
//   }
//   async createUserProfile(id: number, profileDto: ProfileDto) {
//     return await this.profileRepository.createUserProfile(id, profileDto);
//   }
// }
