import { Request, Response } from "express";
import { UserServices } from "./../services/user-services";

const userService = new UserServices();

export class UserControllers {
  async getUser(req: Request, res: Response) {
    const userList = await userService.getMany();
    res.send(userList);
  }
  async createUser(req: Request, res: Response) {
    const payload = req.body;
    const user = await userService.create(payload);
    res.send(user);
  }
  async updateUser(req: Request, res: Response) {
    const payload = req.body;
    const userId = +req.params.userId;
    const userUpdated = await userService.update(userId, payload);
    res.send(userUpdated);
  }
  async removeUser(req: Request, res: Response) {
    const userId = +req.params.userId;
    const result = await userService.remove(userId);
    res.send(result);
  }
}
