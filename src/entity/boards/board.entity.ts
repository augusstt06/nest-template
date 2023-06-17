import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../users/user.entity';

@Entity({ name: 'boards' })
export class BoardEntity {
  // PrimaryColumn을 사용시 id 컬럼을 자동으로 생성해 주지 않아 "Field 'id' doesn't have a default value" 라는 Error가 발생한다.
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  createAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.board)
  user: UserEntity;
}
