import { dataSource } from "../data-source";
import { PostEntity } from "../entities/post-entity";
import { IPost } from "../types/post-type";

const postRepository = dataSource.getRepository(PostEntity);
class PostServices {
  put(
    arg0: string,
    updatePost: (
      req: import("express").Request<
        import("express-serve-static-core").ParamsDictionary,
        any,
        any,
        import("qs").ParsedQs,
        Record<string, any>
      >,
      res: import("express").Response<any, Record<string, any>>
    ) => Promise<void>
  ) {
    throw new Error("Method not implemented.");
  }
  async getMany() {
    const result = await postRepository.find();
    return result;
  }
  async create(post: IPost) {
    const result = await postRepository.save(postRepository.create(post));
    return result;
  }
  async update(postId: number, post: IPost) {
    const postFound = await postRepository.findOneBy({ id: postId });
    if (!postFound) throw new Error("Not Found!");
    const postUpdated = await postRepository.save({
      ...postFound,
      ...post,
    });
    return postUpdated;
  }
  async remove(postId: number) {
    const result = await postRepository.delete(postId);
    return result;
  }
}

const postServices = new PostServices();
export { postServices };
