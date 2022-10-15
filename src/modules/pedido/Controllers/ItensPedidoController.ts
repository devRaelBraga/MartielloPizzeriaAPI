import { Request, Response } from "express";
import { CreateItemPedido } from "../CreateItemPedido";

export class CreateItemPedidoController {
    async handle(req: Request, res  : Response) {
        const {id_item, id_pedido, qtd} = req.body;


        const pedido = new CreateItemPedido();

        const result = await pedido.additem({ id_item, id_pedido, qtd });

        return res.status(201).send();
    }
}