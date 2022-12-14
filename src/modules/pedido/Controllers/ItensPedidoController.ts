import { Request, Response } from "express";
import { EntityItemPedido } from "../EntityItemPedido";

export class CreateItemPedidoController {
    async handle(req: Request, res  : Response) {
        const {id_item, id_pedido, qtd} = req.body;


        const pedido = new EntityItemPedido();

        const result = await pedido.additem({ id_item, id_pedido, qtd });

        return res.status(201).send();
    }
}