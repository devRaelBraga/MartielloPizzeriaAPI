import { Request, Response } from "express";
import { EntityUser } from "../EntityUser";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const {name, senha, tipo} = req.body;


        const user = new EntityUser();

        const result = await user.signup({ name, senha, tipo });

        return res.status(201).json(result);
    }
}