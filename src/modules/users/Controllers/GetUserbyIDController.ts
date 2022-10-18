import { Request, response, Response } from "express";
import { EntityUser } from "../EntityUser";

export class GetUserbyID {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        try {
            const user = new EntityUser();
            const result = await user.getNamebyID({ id });
            if (result) {
                console.log(result);
                return res.status(201).json(result);

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