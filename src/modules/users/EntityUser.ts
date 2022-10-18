import { Funcionario } from "@prisma/client"
import { prisma } from "../../prisma/client";
import { CreateUserDTO } from "./dtos/CreateUserDTO";
import { LoginUserDTO } from "./dtos/LoginUserDTO";
import * as dotenv from "dotenv";
dotenv.config({ path: '../../../.env' });

export class EntityUser {
    async signup({name, senha, tipo}: CreateUserDTO): Promise<Funcionario>{
        //const user = await prisma.
    //}
        try{
            const user = await prisma.funcionario.create({
                data: {
                    name,
                    senha,
                    tipo
                }
            });
            
            return user;
        }
        catch{
            console.log("Deu ruim mané, arruma isso daí e tenta de novo. From: EntityUser: signup() method.");
        }
    }

    async login({id, senha}:LoginUserDTO) {
        const uid = await prisma.funcionario.findUnique({
            where: {
                id
            }
        });

        if(uid.senha == senha){
            process.env.USER = uid.id;
            return uid;
        }
        
        return false;
    }

    async getNamebyID({ id }: LoginUserDTO) {
        const uid = await prisma.funcionario.findUnique({
            where: {
                id
            }
        });

        return uid.name;
    }
}