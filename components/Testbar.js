import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4 text-white`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-full h-screen w-1/3 bg-black transform ${
        open ? "-translate-x-full" : "translate-x-0"
      } transition-transform duration-300 ease-in-out filter drop-shadow-lg `}
    >
      <div className="flex items-center justify-center filter drop-shadow-lg text-white bg-black h-20">
        {/*logo container*/}
      </div>
      <div className="flex justify-start ml-6">
        <div className="flex flex-col">
          <Link href="/chat">
            <a
              className="text-xl my-4 text-white font-semibold"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              Home
            </a>
          </Link>
          <Link href="/explore">
            <a
              className="text-xl my-4 text-white font-semibold"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              BBS X-city
            </a>
          </Link>
          <Link href="/premium">
            <a
              className="text-xl my-4 text-white font-semibold"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              X-pet
            </a>
          </Link>
          <Link href="/about">
            <a
              className="text-xl my-4 text-white font-semibold"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              XPA DAO
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between filter drop-shadow-lg bg-black px-4 py-4 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center">
        <Link href="/">
          <div className="mr-24 ml-20 self-center">
            <a>
              <Image src="/Logo.svg" width={87} height={17} />
            </a>
          </div>
        </Link>
        {/* desktop Navbar */}
        <div className="hidden lg:flex">
          <Link href="/chat">
            <div className="mr-10 self-center">
              <a className="text-white hover:text-cyan-300 font-semibold">
                Home
              </a>
            </div>
          </Link>
          <Link href="/explore">
            <div className="mr-10 self-center">
              <a className="text-white hover:text-cyan-300 font-semibold">
                BBS X-city
              </a>
            </div>
          </Link>
          <Link href="/premium">
            <div className="mr-10 self-center">
              <a className="text-white hover:text-cyan-300 font-semibold">
                X-pet
              </a>
            </div>
          </Link>
          <Link href="/about">
            <div className="mr-10 self-center">
              <a className="text-white hover:text-cyan-300 font-semibold">
                XPA DAO
              </a>
            </div>
          </Link>
        </div>
      </div>

      <div className=" flex justify-end items-center">
      <Link href="/login">
          <div className=" mr-10 lg:mr-20 self-center font-semibold">
            <a className={styles.login}>Follow Us</a>
          </div>
        </Link>
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
