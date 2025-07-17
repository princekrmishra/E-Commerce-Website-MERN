import { Router } from 'express';
import { registerUserController } from '../controller/user.controller.js';

const userRouter = Router();

// POST /api/users/register
userRouter.post('/register', registerUserController);

export default userRouter;
