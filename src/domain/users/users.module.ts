import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { UsersRepository } from './repository/users.repository';
import { ProfileEntity } from 'src/entity/profile.entity';
import { ProfileRepository } from './repository/profile.repository';
import { PostEntity } from 'src/entity/post.entity';
import { PostRepository } from './repository/post.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ProfileEntity, PostEntity])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, ProfileRepository, PostRepository],
})
export class UsersModule {}
