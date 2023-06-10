import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/users.entity';
import { UsersRepository } from './repository/users.repository';
import { Profile } from 'src/entity/profile.entity';
import { ProfileRepository } from './repository/profile.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, ProfileRepository],
})
export class UsersModule {}
