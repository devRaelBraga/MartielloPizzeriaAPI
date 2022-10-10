import { Request, Response } from "express";
import { EntityUser } from "../EntityUser";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const {id, senha} = req.body;

        const user = new EntityUser();

        const result = await user.login({ id, senha });

        //return res.status(201).json(result);
    }
}