import { Request, Response } from "express";
import { commentServices } from "../services/comment-services";

class CommentControllers {
  async getComments(req: Request, res: Response) {
    const comments = await commentServices.getMany();
    res.send(comments);
  }
  async createComment(req: Request, res: Response) {
    const payload = req.body;
    const comment = await commentServices.create(payload);
    res.send(comment);
  }
  async updateComment(req: Request, res: Response) {
    const payload = req.body;
    const commentId = +req.params.commentId;
    const commentUpdated = await commentServices.update(commentId, payload);
    res.send(commentUpdated);
  }
  async removeComment(req: Request, res: Response) {
    const commentId = +req.params.commentId;
    const result = await commentServices.remove(commentId);
    res.send(result);
  }
}
const commentControllers = new CommentControllers();
export { commentControllers };
