import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Collections } from './Collections'

@Entity('users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  nickname: string

  @Column({ type: 'text' })
  password: string

  @Column({ type: 'text' })
  email: string

  @OneToMany(() => Collections, (collection) => collection.user)
  collections: Collections[]
}

export { Users }
