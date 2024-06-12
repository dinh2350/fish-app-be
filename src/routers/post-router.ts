import { Router } from "express";
import { postControllers } from "../controllers/post-controllers";

export const postRouters = Router();

postRouters.get("/", postControllers.getPosts);
postRouters.post("/", postControllers.createPost);
postRouters.put("/:postId", postControllers.updatePost);
postRouters.delete("/:postId", postControllers.removePost);
