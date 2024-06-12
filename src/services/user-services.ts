import { dataSource } from "../data-source";
import { UserEntity } from "../entities/user-entity";
import { IUser } from "../types/user-type";

const userRepository = dataSource.getRepository(UserEntity);

export class UserServices {
  async getMany() {
    const userList = await userRepository.find();
    return userList;
  }
  async create(user: IUser) {
    const userCreated = await userRepository.save(userRepository.create(user));
    return userCreated;
  }
  async update(userId: number, user: IUser) {
    const userFound = await userRepository.findOneBy({ id: userId });
    if (!userFound) throw new Error("Not Found");
    const result = await userRepository.save({
      ...userFound,
      ...user,
    });
    return result;
  }
  async remove(userId: number) {
    const results = await userRepository.delete(userId);
    return results;
  }
}
