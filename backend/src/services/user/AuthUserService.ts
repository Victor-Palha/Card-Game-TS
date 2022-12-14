import prismaClient from "../../prisma";
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"
import {env} from 'process'

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
        const id = user.id.toString()

        //Gerate WEB TOKEN
        const token = sign(
            {
                username: user.username,
                email: user.email,
            },
                process.env.JWT_SECRET,
            {
                subject: id,
                expiresIn: '30d'
            }
        )
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            image: user.image,
            token: token
        }
    }
}

export {AuthUserService}