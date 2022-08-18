import prismaClient from "../../prisma";
import {compare} from "bcryptjs"

interface AuthRequest{
    email: string
    password: string
}

class AuthUserService{
    async execute({email, password}: AuthRequest){
        //Validation email
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(!user){
            throw new Error("Email/Password incorrect!")
        }
        // Validation password
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect!")
        }

        console.log(passwordMatch)
        return {ok:true}
    }
}

export {AuthUserService}