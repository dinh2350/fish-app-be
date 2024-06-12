import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "fishes" })
export class FishEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
