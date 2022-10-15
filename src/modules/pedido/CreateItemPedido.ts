import { prisma } from "../../prisma/client";
import { CreateItemDTO } from "../items/dtos/CreateItemDTO";
import { ItemsPedidoDTO } from "./dtos/ItemsPedidoDTO";

export class CreateItemPedido {
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
}