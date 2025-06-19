import { createUserRepository } from '../repositories/usersRepository';
export const createUserService = (user) => {
    const { firstName, lastName, email } = user;
    return createUserRepository(firstName, lastName, email);
};
