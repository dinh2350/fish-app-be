const { fishServices } = require("../services");

const getFishes = (req, res) => {
  const fishList = fishServices.getMany();
  res.send(fishList);
};

const createFish = (req, res) => {
  const payload = {}; // ?????
  const fish = fishServices.create(payload);
  res.send(fish);
};

const updateFish = (req, res) => {
  const fishId = req.params.fishId;
  const payload = {}; // ?????
  const fish = fishServices.update(fishId, payload);
  res.send(fish);
};

const deleteFish = (req, res) => {
  const fishId = req.params.fishId;
  const fish = fishServices.remove(fishId);
  res.send(fish);
};

module.exports = {
  getFishes,
  createFish,
  updateFish,
  deleteFish,
};
