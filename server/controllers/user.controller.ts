import { Request, Response } from "express";
import { getFirstUser } from "../services/user.service";

export const getFirstUserController = async (req: Request, res: Response) => {
  try {
    const user = await getFirstUser();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
