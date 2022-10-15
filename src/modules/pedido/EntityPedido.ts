import { Pedido } from "@prisma/client"
import { prisma } from "../../prisma/client";
import { CreatePedidoDTO } from "./dtos/CreatePedidoDTO";

export class EntityPedido {
    async addnew({total_value, id_funcionario, forma_pgto}: CreatePedidoDTO): Promise<Pedido>{
        //const user = await prisma.
    //}

        try{
            const pedido = await prisma.pedido.create({
                data: {
                    total_value,
                    id_funcionario,
                    forma_pgto
                }
            });
            
            return pedido;
        }
        catch{
            console.log("Toma vergonha na cara, faz esse negócio direito. From: EntityPedido: addnew() method.");
        }
    }

    async getall(): Promise<Pedido[]>{
        try{
            const pedidos = await prisma.pedido.findMany({});

            return pedidos;
        }
        catch{
            console.log("achei q n ia quebrar mas quebrou");
        }
    }
}