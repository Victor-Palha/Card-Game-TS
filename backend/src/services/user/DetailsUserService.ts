import prismaClient from "../../prisma";

class DetailsUserService{
    async execute(user_id:string){
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                username: true,
                email: true,
                image: true
            }
        })
        return user
    }
}

export {DetailsUserService}