import { Request, Response, NextFunction } from "express";
import { createUserService } from "../services/usersService";
import { User } from "../models/user";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newUser: User = req.body;
    const user = await createUserService(newUser);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    next(err);
    // res.status(500).json("something went wrong");
  }
};
