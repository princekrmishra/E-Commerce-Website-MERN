import { Router } from 'express';
import { registerUserController, verifyEmailController } from '../controller/user.controller.js';

const userRouter = Router();

// POST /api/users/register
userRouter.post('/register', registerUserController);
userRouter.post('/verifyEmail', verifyEmailController);

export default userRouter;
