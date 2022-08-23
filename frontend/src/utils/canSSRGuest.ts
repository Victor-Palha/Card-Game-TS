import { GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
//Somente visitantes podem acessar essa página!
export function canSSRGuest<P>(fn: GetServerSideProps<P>){

    return async(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>>=>{
        const cookies = parseCookies(ctx)
        //Se tentar acessar a pagina porém tendo já um login, redirecionamos
        if(cookies['@game.token']){
            return {
                redirect:{
                    destination: '/home',
                    permanent: false
                }
            }
        }
        
        return await fn(ctx)
    }
}