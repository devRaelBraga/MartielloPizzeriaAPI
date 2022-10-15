import { Request, Response } from "express";
import { EntityPedido } from "../EntityPedido";

export class GetAllPedidosController {
    async handle(req: Request, res: Response) {
        try{
            const pedido = new EntityPedido();

            const result = await pedido.getall();

            return res.status(201).json(result);
        }
        catch{
            console.log("sla");
        }
        
    }
}