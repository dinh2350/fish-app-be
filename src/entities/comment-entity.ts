import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "comments" })
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
