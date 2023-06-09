import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from 'src/entity/users.entity';
import { DataSource, Repository } from 'typeorm';
import { UserDto } from '../dto/user.dto';
import { ProfileDto } from '../dto/profile.dto';
import { Profile } from 'src/entity/profile.entity';

@Injectable()
export class UsersRepository {
  constructor(
    private dataSource: DataSource,
    @Inject(User)
    private userRepository: Repository<User>,
    private profileRepository: Repository<Profile>,
  ) {
    dataSource.createEntityManager();
  }

  async findAllUsers() {
    const users = await this.userRepository.find();
    return users;
  }

  createUser(userDto: UserDto) {
    const newUser = this.userRepository.create({ ...userDto });

    return this.userRepository.save(newUser);
  }

  async updateUser(id: number, userDto: UserDto) {
    return await this.userRepository.update({ id }, { ...userDto });
  }

  async deleteUser(id: number) {
    return await this.userRepository.delete(id);
  }

  async createUserProfile(id: number, profileDto: ProfileDto) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        `This User is Not Found. Cannnot create Profile.`,
        HttpStatus.BAD_REQUEST,
      );
    const newProfile = this.profileRepository.create(profileDto);
    const saveProfile = await this.profileRepository.save(newProfile);
    user.profile = saveProfile;
    return this.userRepository.save(user);
  }
}
