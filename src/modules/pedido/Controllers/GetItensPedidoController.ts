import { Request, Response } from "express";
import { EntityItemPedido } from "../EntityItemPedido";

export class GetItemsPedidoController {
    async handle(req: Request, res  : Response) {
        const { id_pedido } = req.body;


        const pedido = new EntityItemPedido();

        const result = await pedido.getItemsPedido({ id_pedido });

        return res.status(201).json(result);
    }
}