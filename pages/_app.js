import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import "../styles/globals.css";

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
