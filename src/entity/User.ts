import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  BaseEntity,
} from "typeorm";
import { uuid } from "uuidv4";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar", { length: 255 }) email: string;

  @Column("text") password: string;

  @BeforeInsert()
  addId() {
    this.id = uuid();
  }
}
