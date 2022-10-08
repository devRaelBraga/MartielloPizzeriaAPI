import { Funcionario } from "@prisma/client"
import { prisma } from "../../../prisma/client";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute({name, senha, tipo}: CreateUserDTO): Promise<Funcionario>{
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
}