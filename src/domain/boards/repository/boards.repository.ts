import { Injectable } from '@nestjs/common';
import { BoardEntity } from 'src/entity/boards/board.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class BoardsRepository extends Repository<BoardEntity> {
  constructor(private dataSource: DataSource) {
    super(BoardEntity, dataSource.createEntityManager());
  }

  async findAllBoard() {
    const boards = await this.find();
    return boards;
  }
}
