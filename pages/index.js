import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Xpace</title>
        <meta name="description" content="Xpace" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <section>
        <div className="lg:flex justify-between object-scale-down">
          {/* 左區 */}
          <div className="lg:ml-20">
            <div className="lg:mt-40 ">
              <img src="/surf_to_earn_banner.svg" />
            </div>
            <div className="lg:flex justify-start text-white font-bold font-[Montserrat] text-xl mt-10">
              <div className="flex mr-14">
                <img src="/icon1.svg" className="mr-2" />
                <p>CLOSER</p>
              </div>
              <div className="flex mr-14">
                <img src="/icon2.svg" className="mr-2" />
                <p>RICHER</p>
              </div>
              <div className="flex mr-14">
                <img src="/icon3.svg" className="mr-2" />
                <p>HAPPIER</p>
              </div>
            </div>
            <div className="hidden lg:block text-white font-[Montserrat] text-sm mt-20">
              <p>
                The XPACE team is building a super cool and convenient social
                platform
              </p>
              <p>
                that you can govern and earn from your data in this social
                platform, X-city.
              </p>
              <p>
                You can think of it as a hybrid of Reddit, Gather Town, and
                Facebook.
              </p>
            </div>
            <div className="lg:hidden text-white font-[Montserrat] text-sm">
              <p>
                The XPACE team is building a super cool and convenient social
                platform
              
                that you can govern and earn from your data in this social
                platform, X-city.
              
                You can think of it as a hybrid of Reddit, Gather Town, and
                Facebook.
              </p>
            </div>
            <div className=" lg:mt-[60px] lg:mb-80 ">
              <button className={styles.discover}>Discover X-city </button>
            </div>
          </div>

          {/* 太空人 */}
          <div>
            <img
              src="Astronaut.png"
              className="hidden lg:block max-w-full max-h-full -rotate-[3.78deg] "
            />
          </div>

          {/* 側邊欄 */}
          <div className="hidden lg:flex mr-[75px] mt-72  ">
            <div className="text-whit mr-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Twitter.svg" className="w-6 h-6 " />
              </a>
              <a
                href="https://www.discord.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Discord.svg" className="w-6 h-6 mt-10" />
              </a>
              <a
                href="https://mirror.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="Mirror.svg" className="w-6 h-6 mt-10" />
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                <img src="Telegram.svg" className="w-6 h-6 mt-10" />
              </a>
            </div>
            <div className={styles.link_bar} />
          </div>
        
        </div>
      </section>
    </div>
  );
}
