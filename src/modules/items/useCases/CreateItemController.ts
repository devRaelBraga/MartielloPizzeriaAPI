import { Request, Response } from "express";
import { CreateItemUseCase } from "./CreateItemUseCase";

export class CreateItemController {
    async handle(req: Request, res: Response) {
        const {name, description, value} = req.body;


        const createItemUseCase = new CreateItemUseCase();

        const result = await createItemUseCase.execute({ name, description, value });

        return res.status(201).json(result);
    }
}