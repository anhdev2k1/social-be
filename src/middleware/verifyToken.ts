import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET as string);
    req.user = user;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export const userVerifyToken = { verifyToken };