import { createUserService } from "../services/usersService";
export const createUserController = async (req, res, next) => {
    try {
        const newUser = req.body;
        const user = await createUserService(newUser);
        res.status(201).json(user);
    }
    catch (err) {
        console.error(err);
        next(err);
        // res.status(500).json("something went wrong");
    }
};
