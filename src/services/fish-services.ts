import { dataSource } from "../data-source";
import { FishEntity } from "../entities/fish-entity";
import { IFish } from "../types/fish-type";

const fishRepository = dataSource.getRepository(FishEntity);

export class FishServices {
  async getMany() {
    const listFish = await fishRepository.find();
    return listFish;
  }

  async create(fish: IFish) {
    const fishCreate = await fishRepository.save(fishRepository.create(fish));
    return fishCreate;
  }

  async update(fishId: number, fish: IFish) {
    const oneFish = await fishRepository.findOneBy({ id: fishId });
    if (!oneFish) throw new Error("Not Found!");
    const fishUpdated = await fishRepository.save({
      ...oneFish,
      ...fish,
    });
    return fishUpdated;
  }

  async remove(fishId: number) {
    const results = await fishRepository.delete(fishId);
    return results;
  }
}
