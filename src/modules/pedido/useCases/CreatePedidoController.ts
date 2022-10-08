import { Request, Response } from "express";
import { CreatePedidoUseCase } from "./CreatePedidoUseCase";

export class CreatePedidoController {
    async handle(req: Request, res: Response) {
        const {total_value, id_funcionario, forma_pgto} = req.body;


        const createPedidoUseCase = new CreatePedidoUseCase();

        const result = await createPedidoUseCase.execute({ total_value, id_funcionario, forma_pgto });

        return res.status(201).json(result);
    }
}