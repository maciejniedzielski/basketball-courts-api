import place from "./place";
import { Express } from "express";
import { notFound } from "../middlewares";

export default (app: Express): void => {
  app.use("/places", place);
  app.use(notFound);
};
