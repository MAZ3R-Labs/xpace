import Navbar from "../Componenets/Navbar";
import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <nav className="flex items-center flex-wrap bg-black p-6 justify-between">
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
                <a className="text-white hover:text-cyan-300 premium">
                  Premium
                </a>
              </li>
            </Link>
            <Link href="/about">
              <li className="mr-6">
                <a className="text-white hover:text-cyan-300">認識XPACE</a>
              </li>
            </Link>
            <Link href="/download-app">
              <li className="mr-6">
                <a className="text-amber-300 hover:text-cyan-300">下載X-City</a>
              </li>
            </Link>
          </ul>
          <ul className="flex">
            <Link href="/search">
              <li className="mr-6 float-right">
                <a>
                  <Image src="/search.svg" width={28} height={28} />
                </a>
              </li>
            </Link>
            <Link href="/login">
              <li className="mr-6 ">
                <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                  登入
                </a>
              </li>
            </Link>
            <li className="mr-6 float-right text-white">
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">臺灣 <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            <div id="dropdownNavbar" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
               
            </div>
              </li>
          </ul>
        </nav>
        <Navbar />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
