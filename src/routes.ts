import { Router } from 'express';
import { UserController } from './database/controllers/UserController';

const userController = new UserController();
const router = Router();

router.post("/users", userController.create);

export { router };