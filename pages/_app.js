import Navbar from "../Componenets/Navbar";
import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
