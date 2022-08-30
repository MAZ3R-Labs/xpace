import { appWithTranslation } from 'next-i18next';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>

      <section className="lg:bg-black bg-[#000229] pt-[3.75rem] md:pt-[5rem]">
        <Component {...pageProps} />
      </section>

      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp);
