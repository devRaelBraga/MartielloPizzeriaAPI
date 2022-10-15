import { Router } from "express";
import { CreateUserController } from "../modules/users/Controllers/CreateUserController";
import { LoginUserController } from "../modules/users/Controllers/LoginUserController";

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const userRoutes = Router();

userRoutes.post("/", createUserController.handle)
userRoutes.post("/login", loginUserController.handle)

export { userRoutes }