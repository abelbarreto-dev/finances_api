import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

export class MoneyLog {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ name: "user_id", type: "uuid", nullable: false })
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;

  @Column({ name: "bank_id", type: "uuid", nullable: true })
  bankId?: string;

  @Column({ name: "bank_box_id", type: "uuid", nullable: true })
  bankBoxId?: string;

  @Column({ name: "cash_id", type: "uuid", nullable: true })
  cashId?: string;

  @Column({ name: "invoice_id", type: "uuid", nullable: true })
  invoiceId?: string;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: false,
    default: 0,
  })
  amount: number;

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
