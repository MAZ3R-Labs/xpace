import Footer from "../componenets/Footer";
import Navbar from "../Componenets/Navbar";
import Slide from "../componenets/Slide";
import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <section className=" bg-sky-300 ">
        <Component {...pageProps} />
        <Slide />
      </section>
      <Footer />
    </>
  );
}

export default MyApp;
