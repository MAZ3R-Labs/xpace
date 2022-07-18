import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="flex items-center flex-wrap bg-black p-6 justify-between">
      <ul className="flex self-center">
        <Link href="/">
          <li className="mr-24 ml-20 self-center">
            <a>
              <Image src="/Logo.svg" width={87} height={17} />
            </a>
          </li>
        </Link>
        <Link href="/chat">
          <li className="mr-10 self-center">
            <a className="text-white hover:text-cyan-300 font-semibold">Home</a>
          </li>
        </Link>
        <Link href="/explore">
          <li className="mr-10 self-center">
            <a className="text-white hover:text-cyan-300 font-semibold">BBS X-city</a>
          </li>
        </Link>
        <Link href="/premium">
          <li className="mr-10 self-center">
            <a className="text-white hover:text-cyan-300 font-semibold">X-pet</a>
          </li>
        </Link>
        <Link href="/about">
          <li className="mr-10 self-center">
            <a className="text-white hover:text-cyan-300 font-semibold">認識XPACE</a>
          </li>
        </Link>
      </ul>
      <ul className="flex self-center">
        <Link href="/login">
          <li className="mr-20 self-center font-semibold">
            <a className={styles.login}>Follow Us</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
