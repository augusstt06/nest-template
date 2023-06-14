import { Injectable } from '@nestjs/common';
import { BoardsRepository } from './repository/boards.repository';
import { BoardDto } from './dto/board.dto';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardsRepository) {}

  async findAllBoard() {
    return this.boardRepository.findAllBoard();
  }

  createBoard(id: number, boardDto: BoardDto) {
    return this.boardRepository.createBoard(id, boardDto);
  }

  async updateBoard(id: number, boardDto: BoardDto) {
    return await this.boardRepository.updateBoard(id, boardDto);
  }

  async deleteBoard(id: number) {
    return this.boardRepository.deleteBoard(id);
  }
}
