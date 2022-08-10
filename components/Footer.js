import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-black h-44  ">
        {/* Top line */}
        <div className="flex justify-between pt-10">
          <div className="self-center ">
            <ul className="flex">
              <li className="ml-3 lg:ml-16 ">
                <Image src="/logo/Footer_logo.svg" width={30} height={30} />
              </li>
              <li className="ml-3 ">
                <Image src="/logo/Footer_logo_word.svg" width={80} height={30} />
              </li>
            </ul>
          </div>
          <div className="hidden text-white sm:flex justify-between self-center ">
            <ul className="flex mr-0 lg:mr-16 text-sm font-normal">
              <Link href="/">
                <li className="mr-10 cursor-pointer">
                  <a href="#" className=" flex hover:text-cyan-300">
                    Whitepaper
                    <img src="/wpr_arrow.svg" className=" items-center"/>
                  </a>
                  
                </li>
              </Link>
              <Link href="/contact">
                <li className="mr-10 cursor-pointer">
                  <a className=" hover:text-cyan-300">BBS X-city</a>
                </li>
              </Link>
              <Link href="/service">
                <li className="mr-10 cursor-pointer">
                  <a className=" hover:text-cyan-300">X-pet</a>
                </li>
              </Link>
              <Link href="/about">
                <li className="mr-10 cursor-pointer">
                  <a className=" hover:text-cyan-300">XPA DAO</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* 第二行 */}
        <div className="flex justify-between">
          <div className="self-top ">
            <ul className="flex">
              <li className="ml-3 lg:ml-16 ">
                <a className="text-sm text-white">
                  ©2022 Xpace.All rights reserved
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-white flex justify-between self-center mt-5 ">
            <ul className="flex mr-2 lg:mr-16">
              <li className="mr-6 cursor-pointer">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/logo/Twitter.svg" width={24} height={24} />
                </a>
              </li>

              <li className="mr-6 cursor-pointer">
                <a
                  href="https://www.discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/logo/Discord.svg" width={24} height={24} />
                </a>
              </li>

              <li className="mr-6 cursor-pointer">
                <a
                  href="https://mirror.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/logo/Mirror.svg" width={24} height={24} />
                </a>
              </li>

              <li className="mr-6 cursor-pointer">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/logo/Telegram.svg" width={24} height={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
