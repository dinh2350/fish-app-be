import { DataSource } from "typeorm";
import { CommentEntity } from "../entities/comment-entity";
import { FishEntity } from "../entities/fish-entity";
import { PostEntity } from "../entities/post-entity";
import { UserEntity } from "../entities/user-entity";

const entities = [FishEntity, UserEntity, PostEntity, CommentEntity];

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "123456",
  database: "db_fishes",
  entities,
  logging: true, // dev => true , prod => false
  synchronize: true, // dev => true , prod => false
});
