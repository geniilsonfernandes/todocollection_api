import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Collections } from './Collections'

@Entity('tasks')
class Tasks {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column({ default: false })
  is_completed: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Collections, (collection) => collection.tasks, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'collection_id' })
  collections: Collections
}

export { Tasks }
