//Import modules
import prismaClient from "../../prisma/"
import { hash } from "bcryptjs"

interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserService{
    async execute({name,email,password}:UserRequest){
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
                username: name
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
                username: name,
                email: email,
                password: passwordHash
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