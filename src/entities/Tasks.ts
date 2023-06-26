import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Collections } from "./Collections";

@Entity("tasks")
class Tasks {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Collections, (collection) => collection.user)
  collections: Collections[];
}

export { Tasks };
