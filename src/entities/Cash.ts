import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("cashes")
export class Cash {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ name: "user_id", type: "uuid", nullable: false })
  userId: string;

  @ManyToMany(() => User, (user) => user.cashes)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: false,
    default: 0,
  })
  balance: number;

  @Column({
    name: "created_at",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  createAt: Date;

  @Column({
    name: "updated_at",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column({ name: "deleted_at", type: "timestamp", nullable: true })
  deletedAt?: Date;
}
