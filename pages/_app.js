import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    

      <section className="bg-[#000229] z-0 w-full">
        <Component {...pageProps} />
      </section>
      <Footer />
    </>
  );
}

export default MyApp;
