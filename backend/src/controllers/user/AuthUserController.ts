import { Request, Response } from "express";
//Service
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController{
    async handle(req: Request, res:Response){
        const {email, password} = req.body

        const AuthUser = new AuthUserService()

        const auth = await AuthUser.execute({email, password})

        return res.json(auth)
    }
}

export {AuthUserController}