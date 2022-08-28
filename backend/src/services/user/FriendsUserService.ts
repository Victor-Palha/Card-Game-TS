import prismaClient from "../../prisma";

class AllFriendsService{
    async execute(user_id:string){

        const friends = await prismaClient.friends.findMany(
            {
                where:{
                    OR:[{
                        situation: true,
                        id_solicitado: user_id,
                        NOT:{
                            id_solicitante: user_id
                        }
                    },{
                        situation: true,
                        id_solicitante: user_id,
                        NOT:{
                            id_solicitado: user_id
                        }
                    }]
                }, select:{
                    situation: true,
                    solicitante: {
                        select:{
                            username: true
                        }
                    },
                    solicitado: {
                        select:{
                            username: true
                        }
                    }
                }
            }
        )
        return friends
    }
}

export {AllFriendsService}