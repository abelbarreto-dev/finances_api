import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BankBox } from "./BankBox";
import { User } from "./User";

@Entity("banks")
export class Bank {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ name: "user_id", type: "uuid", nullable: false })
  userId: string;

  @ManyToOne(() => User, (user) => user.banks)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;

  @OneToMany(() => BankBox, (bankBox) => bankBox.user)
  bank_boxes: BankBox[];

  @Column({ type: "varchar", length: 10, nullable: false })
  code: string;

  @Column({ type: "varchar", length: 64, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 32, nullable: true })
  agency: string;

  @Column({
    name: "account_number",
    type: "varchar",
    length: 32,
    nullable: false,
  })
  accountNumber: string;

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
  createdAt: Date;

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
