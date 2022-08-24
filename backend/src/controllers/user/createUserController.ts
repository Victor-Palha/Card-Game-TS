import { Request, Response } from "express";
//service
import { CreateUserService } from "../../services/user/createUserService";

class CreateUserController{
    async handle(req:Request, res:Response){
        //Destructure of variables came from body
        const {username, email, password} = req.body
        //Conection with Service
        const CreateUser = new CreateUserService()
        //Execute method from service and get the return
        const user = await CreateUser.execute({username, email, password})
        //Send Return to user
        return res.json(user)
    }
}
export {CreateUserController}