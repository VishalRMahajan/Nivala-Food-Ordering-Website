import express from 'express';
import { loginUser, registerUser, loginadmin } from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/loginadmin', loginadmin);

export default userRouter;