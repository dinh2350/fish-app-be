import { Router } from "express";
import { commentControllers } from "../controllers/comment-controller";

export const commentRouters = Router();

commentRouters.get("/", commentControllers.getComments);
commentRouters.post("/", commentControllers.createComment);
commentRouters.put("/:commentId", commentControllers.updateComment);
commentRouters.delete("/:commentId", commentControllers.removeComment);
