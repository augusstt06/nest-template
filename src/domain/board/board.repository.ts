import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardRepository {
  constructor(private boardRepository: Repository<Board>) {}

  async findAllBoard() {
    return;
  }
}
