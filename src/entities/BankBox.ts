import {
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Column } from "typeorm/browser/decorator/columns/Column.js";
import { Bank } from "./Bank";

@Entity("bank_boxes")
export class BankBox {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ name: "bank_id", type: "uuid", nullable: false })
  bankId: string;

  @ManyToMany(() => Bank, (bank) => bank.bank_boxes)
  @JoinColumn({ name: "bank_id", referencedColumnName: "id" })
  user: Bank;

  @Column({ type: "varchar", length: 32, nullable: false })
  tag: string;

  @Column({ type: "varchar", length: 128, nullable: true })
  description?: string;

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
