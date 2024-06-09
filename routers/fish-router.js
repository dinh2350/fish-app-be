const express = require("express");
const { fishControllers } = require("../controllers");
const fishRouters = express.Router();

fishRouters.get("/", fishControllers.getFishes);

fishRouters.post("/", fishControllers.createFish);

fishRouters.put("/:fishId", fishControllers.updateFish);

fishRouters.delete("/:fishId", fishControllers.deleteFish);

module.exports = {
  fishRouters,
};
