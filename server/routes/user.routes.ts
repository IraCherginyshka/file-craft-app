import { Router } from "express";
import { getFirstUserController } from "../controllers/user.controller";

const router = Router();

router.get("/first-user", getFirstUserController);

export default router;
