import express from "express";
import { FishController } from "./../controllers/fish-controllers";

export const fishRouters = express.Router();
const fishController = new FishController();

fishRouters.get("/", fishController.getFishes);
fishRouters.post("/", fishController.createFish);
fishRouters.put("/:fishId", fishController.updateFish);
fishRouters.delete("/:fishId", fishController.deleteFish);
