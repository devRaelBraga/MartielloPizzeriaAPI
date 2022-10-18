import { Request, Response } from "express";
import { EntityItem } from "../EntityItem";

export class CreateItemController {
    async handle(req: Request, res: Response) {
        const {name, description, value, link_foto} = req.body;


        const item = new EntityItem();

        const result = await item.addnew({ name, description, value, link_foto });

        return res.status(201).json(result);
    }
}