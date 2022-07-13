import Footer from "../componenets/Footer";
import Navbar from "../Componenets/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Navbar/>
      <Component {...pageProps} />

      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Footer/>
    </>
  );
}

export default MyApp;
