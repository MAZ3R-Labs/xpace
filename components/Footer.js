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
              <li className="ml-16 ">
                <Image src="/logo/Logo.svg" width={132} height={30} />
              </li>
            </ul>
          </div>
          <div className=" text-white flex justify-between self-center ">
            <ul className="flex mr-16">
              <Link href="/">
                <li className="mr-6">
                  <a href="#" className=" hover:text-cyan-300">
                    Whitepaper
                  </a>
                </li>
              </Link>
              <Link href="/contact">
                <li className="mr-6">
                  <a className=" hover:text-cyan-300">合作洽談</a>
                </li>
              </Link>
              <Link href="/service">
                <li className="mr-6">
                  <a className=" hover:text-cyan-300">客服信箱</a>
                </li>
              </Link>
              <Link href="/download-app">
                <li className="mr-6">
                  <a className=" hover:text-cyan-300">下載X-City</a>
                </li>
              </Link>
              <Link href="/about">
                <li className="mr-6">
                  <a className=" hover:text-cyan-300">認識更多 XPACE</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* 第二行 */}
        <div className="flex justify-between">
          <div className="self-top ">
            <ul className="flex">
              <li className="ml-16 ">
                <a className="text-sm text-white">
                  ©2022 Xpace.All rights reserved
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-white flex justify-between self-center mt-5 ">
            <ul className="flex mr-16">
              <li className="mr-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/logo/Twitter.svg" width={24} height={24} />
                </a>
              </li>

              <li className="mr-6">
                <a
                  href="https://www.discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/logo/Discord.svg" width={24} height={24} />
                </a>
              </li>

              <li className="mr-6">
                <a
                  href="https://mirror.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/logo/Mirror.svg" width={24} height={24} />
                </a>
              </li>

              <li className="mr-6">
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
