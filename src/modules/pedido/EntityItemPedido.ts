import { ItensPedido } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { ItemsPedidoDTO } from "./dtos/ItemsPedidoDTO";

export class EntityItemPedido {
    async additem({id_item, id_pedido, qtd}: ItemsPedidoDTO): Promise<void> {
        //verificar o id do item e do pedido

        try{
            const ItemExists = await prisma.item.findUnique({
                where: {id: id_item}
            })
    
            //const PedidoExists = await prisma.pedido.findUnique({
            //    where: {id: id_pedido}
            //})    

        }

        catch{
            console.log("Deu ruim pedrinho.  From: CreateItemPedido: additem() method.");
        }

        await prisma.itensPedido.create({
            data: {
                id_item,
                id_pedido,
                qtd
            }
        }
        )
    }

    async getItemsPedido({id_pedido}: ItemsPedidoDTO): Promise<ItensPedido[]> {
        try{
            const items = await prisma.itensPedido.findMany({
                where: {id_pedido: id_pedido}
            });

            return items;
        }
        catch{
            console.log("deu erro no getitemspedido");
        }
    }
}