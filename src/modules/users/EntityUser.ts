import { Funcionario } from "@prisma/client"
import { prisma } from "../../prisma/client";
import { CreateUserDTO } from "./dtos/CreateUserDTO";
import { LoginUserDTO } from "./dtos/LoginUserDTO";

export class EntityUser {
    async signup({name, senha, tipo}: CreateUserDTO): Promise<Funcionario>{
        //const user = await prisma.
    //}

        const user = await prisma.funcionario.create({
            data: {
                name,
                senha,
                tipo
            }
        });
        
        return user;
    }

    async login({id, senha}:LoginUserDTO) {
        const uid = await prisma.funcionario.findUnique({
            where: {
                id
            }
        });

        console.log(uid)
    }
}