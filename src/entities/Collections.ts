import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { Tasks } from "./Tasks";

@Entity("collections")
class Collections {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @ManyToOne(() => Users, (user) => user.collections)
  user: Users;

  @OneToMany(() => Tasks, (task) => task.collections)
  tasks: Tasks[];
}

export { Collections };
