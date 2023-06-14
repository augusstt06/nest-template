import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../users/user.entity';

@Entity({ name: 'boards' })
export class BoardEntity {
  @PrimaryColumn()
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
