import { Request, Response } from "express";
import { FishServices } from "../services/fish-services";

const fishServices = new FishServices();

export class FishController {
  async getFishes(req: Request, res: Response) {
    const fishList = await fishServices.getMany();
    res.send(fishList);
  }

  async createFish(req: Request, res: Response) {
    const payload = req.body;
    console.log(payload);
    const fish = await fishServices.create(payload);
    res.send(fish);
  }

  async updateFish(req: Request, res: Response) {
    const fishId = +req.params.fishId;
    const payload = req.body;
    const fish = await fishServices.update(fishId, payload);
    res.send(fish);
  }

  deleteFish(req: Request, res: Response) {
    const fishId = +req.params.fishId;
    const fish = fishServices.remove(fishId);
    res.send(fish);
  }
}
