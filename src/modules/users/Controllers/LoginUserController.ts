import { Request, response, Response } from "express";
import { EntityUser } from "../EntityUser";

export class LoginUserController {
    async handle(req: Request, res: Response) {
        const { id, senha } = req.body;

        try {
            const user = new EntityUser();
            const result = await user.login({ id, senha });
            if (result) {
                console.log(result.name);
                res.status(201).send(result)

                //const isCorrectPassword = await bcrypt.compare(senha, senhacriptografada);
                //if(isCorrectPassword){
                    //const token = await jwt.hash(secret, password, optiom)
                //}
            }

        } catch (error: any) {
            console.log(error.message);
        }



        //return res.status(201).json(result);
    }
}