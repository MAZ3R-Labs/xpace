import Navbar from '../Componenets/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <div>
  <Navbar/>
  </div>
  <Component {...pageProps} />
  </>
}

export default MyApp
