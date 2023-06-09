import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Profile } from 'src/entity/profile.entity';
import { DataSource, Repository } from 'typeorm';
import { UsersRepository } from './users.repository';
import { ProfileDto } from '../dto/profile.dto';

@Injectable()
export class ProfileRepository extends Repository<Profile> {
  constructor(
    private dataSource: DataSource,
    private userRepository: UsersRepository,
  ) {
    super(Profile, dataSource.createEntityManager());
  }
  async createUserProfile(id: number, profileDto: ProfileDto) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        `This User is Not Found. Cannnot create Profile.`,
        HttpStatus.BAD_REQUEST,
      );
    const newProfile = this.create(profileDto);
    const saveProfile = await this.save(newProfile);
    user.profile = saveProfile;
    return this.userRepository.save(user);
  }
}
