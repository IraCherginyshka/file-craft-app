import { Router } from 'express';
import { createUserController } from '../controllers/usersController';
const router = Router();
// users
router.post('/create-user', createUserController);
export default router;
