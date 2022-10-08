import { Item } from "@prisma/client"
import { prisma } from "../../../prisma/client";
import { CreateItemDTO } from "../dtos/CreateItemDTO";

export class CreateItemUseCase {
    async execute({name, description, value}: CreateItemDTO): Promise<Item>{
        //const user = await prisma.
    //}

        const item = await prisma.item.create({
            data: {
                name,
                description,
                value
            }
        });
        
        return item;
    }
}