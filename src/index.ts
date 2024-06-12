import express, { Express, Request, Response } from "express";
import { dataSource } from "./data-source";
import { rootRouter } from "./routers";

const app: Express = express();
const port = 3333;

// Middleware to parse JSON bodies
app.use(express.json());

// setup databases
dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// health check
app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

// setup router for api - "/api" is prefix
app.use("/api", rootRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
