import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PostEntity } from 'src/entity/post.entity';
import { DataSource, Repository } from 'typeorm';
import { UsersRepository } from './users.repository';
import { PostDto } from '../dto/post.dto';

@Injectable()
export class PostRepository extends Repository<PostEntity> {
  constructor(
    private dataSource: DataSource,
    private userRepository: UsersRepository,
  ) {
    super(PostEntity, dataSource.createEntityManager());
  }

  async createPost(id: number, postDto: PostDto) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        `User Not Found. Cannot create Post.`,
        HttpStatus.BAD_REQUEST,
      );
    const newPost = this.create({ ...postDto, user });
    return this.save(newPost);
  }
}
