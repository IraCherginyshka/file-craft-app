import db from '../db';
export const createUserRepository = (firstName, lastName, email) => {
    return db('users')
        .insert({
        first_name: firstName,
        last_name: lastName,
        email,
    })
        .returning('id');
};
