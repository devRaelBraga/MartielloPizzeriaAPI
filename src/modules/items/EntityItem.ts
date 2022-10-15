import { Item } from "@prisma/client"
import { prisma } from "../../prisma/client";
import { CreateItemDTO } from "./dtos/CreateItemDTO";

export class EntityItem {
    async addnew({name, description, value}: CreateItemDTO): Promise<Item>{
        //const user = await prisma.
    //}
        try{
            const item = await prisma.item.create({
                data: {
                    name,
                    description,
                    value
                }
            });
            
            return item;
        }
        catch{
            console.log("Pô patrão, tu não coloca os negócio direito, quer que funcione como? From: EntityItem: addnew() method.");
        }
    }

    async getall(): Promise<Item[]>{
        try{
            const items = await prisma.item.findMany({});

            return items;
        }
        catch{
            console.log("achei q n ia quebrar mas quebrou");
        }
    }
}