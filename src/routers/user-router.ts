import { Router } from "express";
import { UserControllers } from "../controllers/user-controllers";

export const userRouters = Router();
const userControllers = new UserControllers();

userRouters.get("/", userControllers.getUser);
userRouters.post("/", userControllers.createUser);
userRouters.put("/:userId", userControllers.updateUser);
userRouters.delete("/:userId", userControllers.removeUser);
