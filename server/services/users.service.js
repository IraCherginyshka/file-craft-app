import usersRepository from "../repositories/users.repository.js";

class UsersService {
  createUser(req) {
    console.log(req);
    const { firstName, lastName, email } = req;
    return usersRepository.createUser(firstName, lastName, email);
  }
}

const usersService = new UsersService();

export default usersService;

// export function createUserService(req) {
//   console.log(req);
//   const { firstName, lastName, email } = req;
//   return createUserRepository(firstName, lastName, email);
// }
