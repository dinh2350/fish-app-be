import { Request, Response } from "express";
import { postServices } from "../services/post-services";

class PostControllers {
  async getPosts(req: Request, res: Response) {
    const posts = await postServices.getMany();
    res.send(posts);
  }
  async createPost(req: Request, res: Response) {
    const payload = req.body;
    const post = await postServices.create(payload);
    res.send(post);
  }
  async updatePost(req: Request, res: Response) {
    const postId = +req.params.postId;
    const payload = req.body;
    const newPost = await postServices.update(postId, payload);
    res.send(newPost);
  }
  async removePost(req: Request, res: Response) {
    const postId = +req.params.postId;
    const result = await postServices.remove(postId);
    res.send(result);
  }
}

const postControllers = new PostControllers();
export { postControllers };
