import Navbar from '../Componenets/Navbar'
import '../styles/globals.css'
import Link from "next/link";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return <>
  <div>
  <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <ul className="flex">
        <Link href="/">
          <li className="mr-6">
            <a>
              <Image src="/Logo.svg" width={87} height={17} />
            </a>
          </li>
        </Link>
        <Link href="/">
          <li className="mr-6">
            <a className="text-white hover:text-cyan-300">首頁</a>
          </li>
        </Link>
        <Link href="/explore">
          <li className="mr-6">
            <a className="text-white hover:text-cyan-300">探索</a>
          </li>
        </Link>
        <Link href="/premium">
          <li className="mr-6">
            <a className="text-white hover:text-cyan-300 premium">Premium</a>
          </li>
        </Link>
        <Link href="/about">
          <li className="mr-6">
            <a className="text-white hover:text-cyan-300">認識XPACE</a>
          </li>
        </Link>
        <Link href="/download-app">
          <li className="mr-6">
            <a className="text-white hover:text-cyan-300">下載X-City</a>
          </li>
        </Link>
      </ul>
    </nav>



  <Navbar/>
  </div>
  <Component {...pageProps} />
  </>
}

export default MyApp
