import { Request, Response } from "express";
import { EntityPedido } from "../EntityPedido";

export class CreatePedidoController {
    async handle(req: Request, res: Response) {
        const {total_value, id_funcionario, forma_pgto} = req.body;


        const pedido = new EntityPedido();

        const result = await pedido.addnew({ total_value, id_funcionario, forma_pgto });

        return res.status(201).json(result);
    }
}