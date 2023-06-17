import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardDto } from './dto/board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  async findAllBoard() {
    return await this.boardService.findAllBoard();
  }

  @Post(':id/post')
  createBoard(
    @Param(`id`, ParseIntPipe) userId: number,
    @Body() boardDto: BoardDto,
  ) {
    return this.boardService.createBoard(userId, boardDto);
  }

  @Put(':id')
  async updateBoard(
    @Param('id', ParseIntPipe) boardId: number,
    @Body() boardDto: BoardDto,
  ) {
    return await this.boardService.updateBoard(boardId, boardDto);
  }

  @Delete(':id')
  async deleteBoard(@Param('id', ParseIntPipe) boardId: number) {
    return this.boardService.deleteBoard(boardId);
  }
}
