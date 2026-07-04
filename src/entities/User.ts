import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cash } from "./Cash";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ name: "full_name", type: "varchar", length: 64, nullable: false })
  fullName: string;

  @Column({ type: "varchar", length: 255, nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", length: 64, nullable: false, unique: true })
  username: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  password: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  phone?: string;

  @OneToMany(() => Cash, (cash) => cash.user)
  cashes: Cash[];

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
