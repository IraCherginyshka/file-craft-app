import usersService from "../services/users.service.js";

class UsersController {
  async createUser(req, res) {
    try {
      const id = await usersService.createUser(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
      res.status(500).json("something went wrong");
    }
  }
}

const usersController = new UsersController();

export default usersController;

// export async function createUserController(req, res) {
//   try {
//     const id = await createUserService(req.body);
//     res.status(201).json(id);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json("something went wrong");
//   }
// }
