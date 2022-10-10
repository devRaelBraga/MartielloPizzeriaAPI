import { Request, Response } from "express";
import { EntityItem } from "../EntityItem";

export class CreateItemController {
    async handle(req: Request, res: Response) {
        const {name, description, value} = req.body;


        const item = new EntityItem();

        const result = await item.addnew({ name, description, value });

        return res.status(201).json(result);
    }
}