import { AppProps } from "next/app"
import '../../styles/globals.scss'
import { AuthProvider } from "../contexts/AuthContext"
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { CardsProvider } from "../contexts/CardsContext";


function MyApp({ Component, pageProps }:AppProps) {
  return (
    <AuthProvider>
      
      <Component {...pageProps} />
      <ToastContainer autoClose={2000}/>
      
    </AuthProvider>
  )
}

export default MyApp
