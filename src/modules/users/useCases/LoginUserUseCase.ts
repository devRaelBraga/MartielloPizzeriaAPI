import { Funcionario } from "@prisma/client"
import { prisma } from "../../../prisma/client";
import { LoginUserDTO } from "../dtos/LoginUserDTO";

export class LoginUserUseCase{
    async execute ({id, senha}:LoginUserDTO) {
        const uid = await prisma.funcionario.findUnique({
            where: {
                id
            }
        });

        console.log(uid)
    }
}