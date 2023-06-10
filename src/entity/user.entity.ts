import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfileEntity } from './profile.entity';
import { PostEntity } from './post.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToOne(() => ProfileEntity)
  @JoinColumn()
  profile: ProfileEntity;

  // User와 Post는 일대다의 관계를 가진다.
  // 1명의 사용자가 다수의 게시물 생성 가능
  @OneToMany(() => PostEntity, (post) => post.user)
  post: PostEntity[];
}
