import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <section className=" bg-[#000229]">
        <Component {...pageProps} />
      </section>
      <Footer />
    </>
  );
}

export default MyApp;
