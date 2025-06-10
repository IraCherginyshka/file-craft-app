import express from "express";
import usersController from "../controllers/users.controller.js";

const router = express.Router();

// users
router.post("/create-user", usersController.createUser);

export default router;
