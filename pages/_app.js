import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Rwd from "../components/Rwd";
import Testbar from "../components/Testbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <Testbar/> */}
    <Rwd/>
    

      <section className="bg-[#000229] z-0 w-full">
        <Component {...pageProps} />
      </section>
      <Footer />
    </>
  );
}

export default MyApp;
