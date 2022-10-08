import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const {name, senha, tipo} = req.body;


        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({ name, senha, tipo });

        return res.status(201).json(result);
    }
}