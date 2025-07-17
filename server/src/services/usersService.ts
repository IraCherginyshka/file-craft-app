import { createUserRepository } from "../repositories/usersRepository";
import { User } from "../models/user";

export const createUserService = (user: User) => {
  const { firstName, lastName, email } = user;
  return createUserRepository(firstName, lastName, email);
};
