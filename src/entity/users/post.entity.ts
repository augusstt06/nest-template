import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'user_posts' })
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // 게시물과 사용자는 다대일의 관계를 가진다.
  // 다수의 게시물이 1명의 사용자가 작성이 가능
  // @ManyToOne(() => UserEntity, (user) => user.post)
  // user: UserEntity;
}
