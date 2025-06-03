import { getFirstUserFromDb } from "../repositories/user.repository";
import { User } from "../types/User";

export const getFirstUser = async (): Promise<User | null> => {
  // request data

  return getFirstUserFromDb();
};

const userService = {
  getFirstUser(req: Request, res: Response) {},
};
