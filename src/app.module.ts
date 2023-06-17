import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './domain/users/users.module';
import { UserEntity } from './entity/users/user.entity';
import { ProfileEntity } from './entity/users/profile.entity';
import { BoardEntity } from './entity/boards/board.entity';
import { BoardsModule } from './domain/boards/boards.module';

@Module({
  imports: [
    UsersModule,
    BoardsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'template',
      password: 'template',
      database: 'nest_template',
      entities: [UserEntity, ProfileEntity, BoardEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
