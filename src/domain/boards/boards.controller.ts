import {
  Body,
  Controller,
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
    @Param(`id`, ParseIntPipe) id: number,
    @Body() boardDto: BoardDto,
  ) {
    return this.boardService.createBoard(id, boardDto);
  }

  @Put(':id')
  async updateBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body() boardDto: BoardDto,
  ) {
    return await this.boardService.updateBoard(id, boardDto);
  }
}
