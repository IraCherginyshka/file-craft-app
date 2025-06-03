import knex from "../db";
import { User } from "../types/User";

export const getFirstUser = async () => {
  const user: User = await knex("users").first();
  return user;
};
