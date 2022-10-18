import { Request, Response } from "express";
import { EntityItem } from "../EntityItem";

export class GetItemController {
    async handle(req: Request, res: Response) {
        try{
            const { id } = req.body;

            const item = new EntityItem();

            const result = await item.getItem({id});

            return res.status(201).json(result);
        }
        catch{
            console.log("sla");
        }
        
    }
}