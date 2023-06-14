import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/users/user.entity';
import { UsersRepository } from './repository/users.repository';
import { ProfileEntity } from 'src/entity/users/profile.entity';
import { ProfileRepository } from './repository/profile.repository';
import { PostEntity } from 'src/entity/users/post.entity';
import { PostRepository } from './repository/post.repository';
import { BoardEntity } from 'src/entity/boards/board.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ProfileEntity,
      PostEntity,
      BoardEntity,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, ProfileRepository, PostRepository],
})
export class UsersModule {}
