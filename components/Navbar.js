import React, { useEffect, useState } from "react";
import Link from "next/link";
import { disableScroll, enableScroll } from "./disableScroll";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="fixed flex items-center justify-between w-full h-[3.75rem] md:h-[5rem] z-50 bg-black">
        <div className="navbar w-full sticky top-0 left-0 right-0 bg-[#fff0] md:justify-center items-center h-[60px] md:h-[88px] flex">
          <div className="navbar-start">
            <Link href="/">
              <div className="absolute w-24 ml-6 md:mr-24 md:ml-20 self-center object-none">
                <a>
                  <img src="/logo/Logo.svg" className=" object-none " />
                </a>
              </div>
            </Link>
            <div className="ml-48 hidden md:flex">
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
                    XPA-DAO
                  </a>
                </div>
              </Link>
            </div>
          </div>
          <div className="navbar-end md:hidden">
            <Link href="/login">
              <div className="mr-20 self-center font-semibold">
                <a className={styles.login}>Follow Us</a>
              </div>
            </Link>
            {!toggleMenu && (
              <button
                className=" absolute top-[24px] right-[27px]"
                onClick={() => {
                  setToggleMenu(true);
                  disableScroll();
                }}
              >
                <img
                  className="h-[20px] w-[20px]"
                  src="/logo/Discord.svg"
                  alt=""
                />
              </button>
            )}
            {toggleMenu && (
              <button
                className=" absolute top-[24px] right-[27px]"
                onClick={() => {
                  setToggleMenu(false);
                  enableScroll();
                }}
              >
                <img
                  className="h-[20px] w-[20px]"
                  src="/logo/Telegram.svg"
                  alt=""
                />
              </button>
            )}
          </div>
          <div className="navbar-end hidden md:flex flex-row">
            <>
              <Link href="/login">
                <div className="mr-20 self-center font-semibold">
                  <a className={styles.login}>Follow Us</a>
                </div>
              </Link>
            </>
          </div>
        </div>
      </nav>
      {toggleMenu && (
        <div className=" fixed top-[60px] left-1/2 z-30 w-1/2 h-screen py-[34px] px-[16px] flex flex-col justify-start items-end md:hidden text-white bg-black">
          <Link href="/chat">
            <a
              className="font-semibold text-base mb-9"
              onClick={() => {
                setToggleMenu(false);
                enableScroll();
              }}
            >
              Home
            </a>
          </Link>
          <Link href="/explore">
            <a
              className="font-semibold text-base mb-9"
              onClick={() => {
                setToggleMenu(false);
                enableScroll();
              }}
            >
              BBS X-city
            </a>
          </Link>
          <Link href="/premium">
            <a
              className="font-semibold text-base mb-9"
              onClick={() => {
                setToggleMenu(false);
                enableScroll();
              }}
            >
              X-pet
            </a>
          </Link>
          <Link href="/about">
            <a
              className="font-semibold text-base mb-9"
              onClick={() => {
                setToggleMenu(false);
                enableScroll();
              }}
            >
              XPA-DAO
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
