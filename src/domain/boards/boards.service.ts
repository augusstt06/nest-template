import { Injectable } from '@nestjs/common';
import { BoardsRepository } from './repository/boards.repository';
import { BoardDto } from './dto/board.dto';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardsRepository) {}

  async findAllBoard() {
    return this.boardRepository.findAllBoard();
  }

  createBoard(userId: number, boardDto: BoardDto) {
    return this.boardRepository.createBoard(userId, boardDto);
  }

  async updateBoard(boardId: number, boardDto: BoardDto) {
    return await this.boardRepository.updateBoard(boardId, boardDto);
  }

  async deleteBoard(boardId: number) {
    return this.boardRepository.deleteBoard(boardId);
  }
}
