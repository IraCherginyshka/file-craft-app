import db from '../db';
import { User } from '../models/user';

export const createUserRepository = (
  firstName: any,
  lastName: any,
  email: any,
) => {
  return db('users')
    .insert({
      first_name: firstName,
      last_name: lastName,
      email,
    })
    .returning('id');
};
