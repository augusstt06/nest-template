import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BoardEntity } from 'src/entity/boards/board.entity';
import { DataSource, Repository } from 'typeorm';
import { BoardDto } from '../dto/board.dto';
import { UsersRepository } from 'src/domain/users/repository/users.repository';

@Injectable()
export class BoardsRepository extends Repository<BoardEntity> {
  constructor(
    private dataSource: DataSource,
    private userRepository: UsersRepository,
  ) {
    super(BoardEntity, dataSource.createEntityManager());
  }

  async findAllBoard() {
    const boards = await this.find();
    return boards;
  }

  async createBoard(id: number, boardDto: BoardDto) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        `User Not Found. Cannot Create Post.`,
        HttpStatus.BAD_REQUEST,
      );
    const newPost = this.create({ ...boardDto, createAt: new Date(), user });
    return this.save(newPost);
    // board dto 설정하기
    // const newBoard = this.create({ ...boardDto, createAt: new Date() });
    // return this.save(newBoard);
  }

  async updateBoard(id: number, boardDto: BoardDto) {
    return await this.update({ id }, { ...boardDto });
  }

  async deleteBoard(id: number) {
    return await this.delete(id);
  }
}
