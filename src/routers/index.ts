import { Router } from "express";
import { commentRouters } from "./comment-router";
import { fishRouters } from "./fish-router";
import { postRouters } from "./post-router";
import { userRouters } from "./user-router";

// initial root router to import another router
export const rootRouter = Router();

// use fish router
rootRouter.use("/fishes", fishRouters);
rootRouter.use("/users", userRouters);
rootRouter.use("/posts", postRouters);
rootRouter.use("/comments", commentRouters);
