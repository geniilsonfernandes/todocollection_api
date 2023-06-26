import express, { NextFunction, Request, Response } from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import { AppError } from "./utils/error/AppError";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  return app.listen(process.env.PORT);
});
