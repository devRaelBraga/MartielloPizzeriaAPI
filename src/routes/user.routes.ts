import { Router } from "express";
import { CreateUserController } from "../modules/users/Controllers/CreateUserController";
import { GetUserbyID } from "../modules/users/Controllers/GetUserbyIDController";
import { LoginUserController } from "../modules/users/Controllers/LoginUserController";

const getUserbyID = new GetUserbyID();
const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const userRoutes = Router();

userRoutes.post("/id", getUserbyID.handle)
userRoutes.post("/", createUserController.handle)
userRoutes.post("/login", loginUserController.handle)

export { userRoutes }