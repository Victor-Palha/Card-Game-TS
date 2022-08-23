import { GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";

//função para apenas users podem acessar

export function canSSRAuth<P>(fn: GetServerSideProps<P>){
    return async (ctx: GetServerSidePropsContext):Promise<GetServerSidePropsResult<P>>=>{
        const cookies = parseCookies(ctx)

        const token = cookies['@game.token']

        if(!token){
            return{
                redirect:{
                    destination: '/',
                    permanent: false
                }
            }
        }


        try{
            return await fn(ctx)
        }catch(err){
            if(err instanceof AuthTokenError){
                destroyCookie(ctx, '@game.token')
                return{
                    redirect:{
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }
    }
}
