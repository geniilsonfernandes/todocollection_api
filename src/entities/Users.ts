import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Collections } from "./Collections";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  password: string;

  @OneToMany(() => Collections, (collection) => collection.user)
  collections: Collections[];
}

export { Users };
