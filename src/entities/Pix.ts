import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bank } from "./Bank";
import { PixType } from "../utils/PixEnum";

@Entity("pixes")
export class Pix {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ name: "bank_id", type: "uuid", nullable: false })
  bankId: string;

  @ManyToOne(() => Bank)
  @JoinColumn({ name: "bank_id", referencedColumnName: "id" })
  bank: Bank;

  @Column({ type: "varchar", length: 32, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 128, nullable: true })
  description?: string;

  @Column({ name: "pix_type", type: "enum", enum: PixType, nullable: false })
  pixType: PixType;

  @Column({ name: "is_mine", type: "boolean", nullable: false, default: true })
  isMine: boolean;

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
