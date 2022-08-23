import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from "next/head"
import { Header } from "../../components/Header"

export default function Home(){
    return(
        <>
            <Head>
                <title>Home - The Game</title>
            </Head>
            <div>
                <Header/>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx)=>{
    return{
        props: {}
    }
})