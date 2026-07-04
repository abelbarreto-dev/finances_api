import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { InvoiceStatus, InvoiceType } from "../utils/InvoiceEnum";

@Entity("invoices")
export class Invoice {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ name: "user_id", type: "uuid", nullable: false })
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: User;

  @Column({ type: "varchar", length: 32, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  description: string;

  @Column({ type: "int", nullable: true, default: 1 })
  installments?: number;

  @Column({ name: "installs_paid", type: "int", nullable: true, default: 0 })
  installsPaid?: number;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  amount: number;

  @Column({
    name: "total_amount",
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: true,
  })
  totalAmount?: number;

  @Column({ name: "due_date", type: "timestamp", nullable: false })
  dueDate: Date;

  @Column({
    name: "invoice_type",
    type: "enum",
    enum: InvoiceType,
    nullable: false,
  })
  invoiceType: InvoiceType;

  @Column({
    type: "enum",
    enum: InvoiceStatus,
    nullable: false,
    default: InvoiceStatus.PENDING,
  })
  status: InvoiceStatus;

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
