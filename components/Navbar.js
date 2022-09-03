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
              <div className="absolute w-24 ml-6 md:mr-24 md:ml-20 self-center object-none cursor-pointer">
                <a>
                  <img src="/logo/Logo.svg" className="object-fit" />
                </a>
              </div>
            </Link>
            <div className="ml-48 hidden md:flex">
              <Link href="/">
                <div className="mr-10 self-center cursor-pointer">
                  <a className="text-white hover:text-cyan-300 font-semibold">
                    Home
                  </a>
                </div>
              </Link>
              <Link href="/soon">
                <div className="mr-10 self-center cursor-pointer">
                  <a className="text-white hover:text-cyan-300 font-semibold">
                    BBS X-city
                  </a>
                </div>
              </Link>
              <Link href="/soon">
                <div className="mr-10 self-center cursor-pointer">
                  <a className="text-white hover:text-cyan-300 font-semibold">
                    X-pet
                  </a>
                </div>
              </Link>
              <Link href="/soon">
                <div className="mr-10 self-center cursor-pointer">
                  <a className="text-white hover:text-cyan-300 font-semibold">
                    XPA-DAO
                  </a>
                </div>
              </Link>
            </div>
          </div>
          <div className="navbar-end md:hidden">
            <Link href="/login">
              <div className="mr-20 self-center font-semibold cursor-pointer">
                <a className={styles.login}>Follow Us</a>
              </div>
            </Link>
            {!toggleMenu && (
              <button
                className=" absolute top-[24px] right-[27px] cursor-pointer"
                onClick={() => {
                  setToggleMenu(true);
                  disableScroll();
                }}
              >
                <img
                  className="h-[20px] w-[20px]"
                  src="/menu_close.png"
                  alt=""
                />
              </button>
            )}
            {toggleMenu && (
              <button
                className=" absolute top-[24px] right-[27px] cursor-pointer"
                onClick={() => {
                  setToggleMenu(false);
                  enableScroll();
                }}
              >
                <img
                  className="h-[20px] w-[20px]"
                  src="/menu_open.png"
                  alt=""
                />
              </button>
            )}
          </div>
          <div className="navbar-end hidden md:flex flex-row">
            <>
              <Link href="/login">
                <div className="mr-20 self-center font-semibold cursor-pointer">
                  <a className={styles.login}>Follow Us</a>
                </div>
              </Link>
            </>
          </div>
        </div>
      </nav>
      {toggleMenu && (
        <div className=" fixed top-[60px] left-0 z-30 w-screen h-screen py-[34px] px-[16px] flex flex-col justify-start items-end md:hidden text-white bg-black">
          <Link href="/">
            <a
              className="font-semibold text-base mb-9 cursor-pointer"
              onClick={() => {
                setToggleMenu(false);
                enableScroll();
              }}
            >
              Home
            </a>
          </Link>
          <Link href="/soon">
            <a
              className="font-semibold text-base mb-9 cursor-pointer"
              onClick={() => {
                setToggleMenu(false);
                enableScroll();
              }}
            >
              BBS X-city
            </a>
          </Link>
          <Link href="/soon">
            <a
              className="font-semibold text-base mb-9 cursor-pointer"
              onClick={() => {
                setToggleMenu(false);
                enableScroll();
              }}
            >
              X-pet
            </a>
          </Link>
          <Link href="/soon">
            <a
              className="font-semibold text-base mb-9 cursor-pointer"
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
