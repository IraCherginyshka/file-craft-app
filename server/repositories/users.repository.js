import db from "../db/index.js";

class UsersRepository {
  async createUser(firstName, lastName, email) {
    const [id] = await db("users")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
      })
      .returning("id");

    return id;
  }
}

const usersRepository = new UsersRepository();

export default usersRepository;

// export async function createUserRepository(firstName, lastName, email) {
//   const [id] = await db("users")
//     .insert({
//       first_name: firstName,
//       last_name: lastName,
//       email,
//     })
//     .returning("id");
//
//   return id;
// }
