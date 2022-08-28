//Import modules
import prismaClient from "../../prisma/"
import { hash } from "bcryptjs"

interface UserRequest{
    username: string,
    email: string,
    password: string
}

class CreateUserService{
    async execute({username,email,password}:UserRequest){
        //Verifications
        //Have email?
        if(!email){
            throw new Error("Email missing")
        }

        //Email already in database?
        const emailAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(emailAlreadyExists){
            throw new Error("Email Already Exists!")
        }

        //UserName already exists?
        const nameAlreadyExists = await prismaClient.user.findFirst({
            where:{
                username: username
            }
        })
        if(nameAlreadyExists){
            throw new Error("Username Already Exists!")
        }

        //Encrypt
        const passwordHash = await hash(password, 8)

        //Create new User
        const user = await prismaClient.user.create({
            data:{
                username: username,
                email: email,
                password: passwordHash,
            },
            select:{
                username: true,
                email: true,
                id:true
            }
        })

        //Return user
        return {user}
    }
}
export {CreateUserService}