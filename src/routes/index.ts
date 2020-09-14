import place from "./place";
import { Express } from "express";

export default (app: Express): void => {
  app.use("/places", place);
};
