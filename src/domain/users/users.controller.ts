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
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { ProfileDto } from './dto/profile.dto';
import { PostDto } from './dto/post.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Post()
  createUser(@Body() userDto: UserDto) {
    this.userService.createUser(userDto);
  }
  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() userDto: UserDto,
  ) {
    return await this.userService.updateUser(id, userDto);
  }
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }

  @Post(':id/profiles')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() profileDto: ProfileDto,
  ) {
    return this.userService.createUserProfile(id, profileDto);
  }

  // @Post(`:id/posts`)
  // createPost(@Param('id', ParseIntPipe) id: number, @Body() postDto: PostDto) {
  //   return this.userService.createPost(id, postDto);
  // }
}
