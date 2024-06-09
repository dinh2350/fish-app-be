const express = require("express");
const { fishRouters } = require("./fish-router");

// initial root router to import another router
const rootRouter = express.Router();

// use fish router
rootRouter.use("/fishes", fishRouters);

module.exports = {
  rootRouter,
};
