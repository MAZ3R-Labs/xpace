import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testbar from "../components/Testbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>

    <div className="dark">
    <Testbar/>
    </div>
    
      {/* <Navbar /> */}
      <section className=" bg-[#000229]">
        <Component {...pageProps} />
      </section>
      <Footer />
    </>
  );
}

export default MyApp;
