import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Profile } from 'src/entity/profile.entity';
import { DataSource, Repository } from 'typeorm';
import { UsersRepository } from './users.repository';
import { ProfileDto } from '../dto/profile.dto';

// 생성한 Entity별로 각각의 Repository를 생성하여 코드를 작성한다.
// 다른 Repository가 필요하다면, constructor가 Repository를 초기화 할때 해당 Repository를 생성하도록 설정한다.
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
