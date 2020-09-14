import { Request, Response, NextFunction } from "express";

export const logger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(
    `Log: [${req.method.toUpperCase()}] method on address ${req.originalUrl}`
  );
  next();
};

export const notFound = (req: Request, res: Response): void => {
  res.status(404).send({
    error: "Endpoint not found",
  });
};
