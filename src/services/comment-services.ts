import { dataSource } from "../data-source";
import { CommentEntity } from "../entities/comment-entity";
import { IComment } from "../types/comment-type";

const commentRepository = dataSource.getRepository(CommentEntity);
class CommentServices {
  async getMany() {
    const result = await commentRepository.find();
    return result;
  }
  async create(comment: IComment) {
    const result = await commentRepository.save(
      commentRepository.create(comment)
    );
    return result;
  }
  async update(commentId: number, comment: IComment) {
    const commentFound = await commentRepository.findOneBy({ id: commentId });
    if (!commentFound) throw new Error("Not Found");
    const result = await commentRepository.save({
      ...commentFound,
      ...comment,
    });
    return result;
  }
  async remove(commentId: number) {
    const result = await commentRepository.delete(commentId);
    return result;
  }
}

const commentServices = new CommentServices();
export { commentServices };
