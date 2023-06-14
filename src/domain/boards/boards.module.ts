import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from 'src/entity/boards/board.entity';
import { UserEntity } from 'src/entity/users/user.entity';
import { BoardsRepository } from './repository/boards.repository';
import { UsersRepository } from '../users/repository/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BoardEntity, UserEntity])],
  controllers: [BoardsController],
  providers: [BoardsService, BoardsRepository, UsersRepository],
})
export class BoardsModule {}
