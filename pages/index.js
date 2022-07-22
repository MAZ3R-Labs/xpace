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
      <main>
        <section id="Home">
          <div className="lg:mb-20 lg:flex justify-between object-scale-down">
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
                  platform that you can govern and earn from your data in this
                  social platform, X-city. You can think of it as a hybrid of
                  Reddit, Gather Town, and Facebook.
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
                  <img src="/logo/Twitter.svg" className="w-6 h-6 " />
                </a>
                <a
                  href="https://www.discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/logo/Discord.svg" className="w-6 h-6 mt-10" />
                </a>
                <a
                  href="https://mirror.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/logo/Mirror.svg" className="w-6 h-6 mt-10" />
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/logo/Telegram.svg" className="w-6 h-6 mt-10" />
                </a>
              </div>
              <div className={styles.link_bar} />
            </div>
          </div>
        </section>
        <section id="about">
          <div className="lg:pb-52 lg:flex justify-between font-[Montserrat]">
            <div className="text-white text-[40px] mt-10 ml-20">
              <p>ABOUT</p>
              <p>VISION</p>
            </div>
            <div>
              <div className={styles.about_bar}></div>
              <div className="text-white mr-[100px] bg-[url('/About_banner_1.png')] bg-right bg-no-repeat bg-cover">
                <div className=" mr-72 mb-5 pb-5">
                  <p className="text-4xl mb-5">Data Justice</p>
                  <p>
                    Being one part of the web 3.0 philosophy, Xpace dedicate to
                    realizing a data justice
                  </p>
                  <p>
                    world. The enormous profits of data should belong to data
                    generators, not media
                  </p>
                  <p>
                    magnates. Data generators, our users, are the boss of their
                    data. With blockchain
                  </p>
                  <p>
                    technology, the logs of authorization are recorded immutably
                    and transparently.
                  </p>
                </div>
              </div>
              <div className={styles.about_bar_1}></div>
              <div className="text-white mr-[100px] bg-[url('/About_banner_2.png')] bg-right bg-no-repeat bg-cover">
                <div className=" mr-72 pb-5">
                  <p className="text-4xl mb-5">Immersion</p>
                  <p>
                  Xpace wish you a brand new community experience, where you can meet 
                  </p>
                  <p>
                  people who share the same interests as you and interact with them with
                  </p>
                  <p>
                  exciting options. The immersive environments give you more inspiration 
                  </p>
                  <p>
                  when you surf X-city.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}
