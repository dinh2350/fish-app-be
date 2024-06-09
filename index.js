const express = require("express");
const { rootRouter } = require("./routers");

const app = express();
const port = 3333;

// health check
app.get("/ping", (req, res) => {
  res.send("pong");
});

// setup router for api - "/api" is prefix
app.use("/api", rootRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
