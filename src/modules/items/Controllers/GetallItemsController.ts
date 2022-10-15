import { Request, Response } from "express";
import { EntityItem } from "../EntityItem";

export class GetAllItemsController {
    async handle(req: Request, res: Response) {
        try{
            const item = new EntityItem();

            const result = await item.getall();

            return res.status(201).json(result);
        }
        catch{
            console.log("sla");
        }
        
    }
}