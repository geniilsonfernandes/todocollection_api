import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Tasks } from './Tasks'
import { Users } from './Users'

@Entity('collections')
class Collections {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text' })
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Users, (user) => user.collections)
  @JoinColumn({ name: 'user_id' })
  user: Users

  @OneToMany(() => Tasks, (task) => task.collections)
  tasks: Tasks[]
}

export { Collections }
