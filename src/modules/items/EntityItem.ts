import { Item } from "@prisma/client"
import { prisma } from "../../prisma/client";
import { CreateItemDTO } from "./dtos/CreateItemDTO";
import { GetItemDTO } from "./dtos/GetItemDTO";

export class EntityItem {
    async addnew({name, description, value, link_foto}: CreateItemDTO): Promise<Item>{
        //const user = await prisma.
    //}
        try{
            const item = await prisma.item.create({
                data: {
                    name,
                    description,
                    value,
                    link_foto
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

    async getItem({ id }: GetItemDTO){
        try{
            const item = await prisma.item.findUnique({
                where: {
                    id
                }
            });

            return item;
        }
        catch{
            console.log("achei q ia quebrar mas quebrou");
        }
    }
}