import { Router } from 'express';
import { ConfirmationController } from './controllers/ConfirmationController';
import { UserController } from './controllers/UserController';

const userController = new UserController();
const confirmationController = new ConfirmationController();
const router = Router();

router.post("/users", userController.create);
router.get("/confirmation", confirmationController.execute);

export { router };