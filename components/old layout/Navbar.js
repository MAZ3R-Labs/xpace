import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="flex items-center flex-wrap bg-black p-6 justify-between">
      <ul className="flex self-center">
        <Link href="/">
          <li className="mr-6 self-center">
            <a>
              <Image src="/Logo.svg" width={87} height={17} alt="" />
            </a>
          </li>
        </Link>
        <Link href="/chat">
          <li className="mr-6 self-center">
            <a className="text-white hover:text-cyan-300">首頁</a>
          </li>
        </Link>
        <Link href="/explore">
          <li className="mr-6 self-center">
            <a className="text-white hover:text-cyan-300">探索</a>
          </li>
        </Link>
        <Link href="/premium">
          <li className="mr-6 self-center">
            <a className={styles.rainbow}>Premium</a>
          </li>
        </Link>
        <Link href="/about">
          <li className="mr-6 self-center">
            <a className="text-white hover:text-cyan-300">認識XPACE</a>
          </li>
        </Link>
        <Link href="/download-app">
          <li className="mr-6 self-center">
            <a className="text-amber-300 hover:text-cyan-300 font-semibold">
              下載X-City
            </a>
          </li>
        </Link>
      </ul>
      <ul className="flex self-center">
        <Link href="/search">
          <li className="mr-6 float-right self-center">
            <a>
              <Image src="/search.svg" width={28} height={25} alt="" />
            </a>
          </li>
        </Link>
        <Link href="/login">
          <li className="mr-6 self-center">
            <a className={styles.login}>登入</a>
          </li>
        </Link>
        <li className="mr-6 float-right text-white self-center">
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            臺灣{" "}
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="dropdownNavbar"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          ></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
