import { Pedido } from "@prisma/client"
import { prisma } from "../../prisma/client";
import { CreatePedidoDTO } from "./dtos/CreatePedidoDTO";

export class EntityPedido {
    async addnew({total_value, id_funcionario, forma_pgto}: CreatePedidoDTO): Promise<Pedido>{
        //const user = await prisma.
    //}

        const pedido = await prisma.pedido.create({
            data: {
                total_value,
                id_funcionario,
                forma_pgto
            }
        });
        
        return pedido;
    }
}