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
          <div className=" lg:mb-20 lg:flex justify-between object-scale-down">
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
          <div className="lg:flex justify-between font-[Montserrat]">
            <div className="text-white text-[40px] mt-10 lg:ml-20">
              <p>ABOUT</p>
              <p>VISION</p>
            </div>
            <div>
              <div className={styles.about_bar}></div>
              <div className="text-white lg:mr-[100px] bg-[url('/About_banner_1.png')] bg-right bg-no-repeat bg-cover">
                <div className=" lg:mr-72 mb-5 pb-5">
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
              <div className="text-white lg:mr-[100px] bg-[url('/About_banner_2.png')] bg-right bg-no-repeat bg-cover">
                <div className=" lg:mr-72 pb-5">
                  <p className="text-4xl mb-5">Immersion</p>
                  <p>
                    Xpace wish you a brand new community experience, where you
                    can meet
                  </p>
                  <p>
                    people who share the same interests as you and interact with
                    them with
                  </p>
                  <p>
                    exciting options. The immersive environments give you more
                    inspiration
                  </p>
                  <p>when you surf X-city.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hidden lg:block h-[200px]"/>

        <section id="Core features">
          <div className="lg:flex justify-around text-white">
            {/* 左 */}
            <div>
              <div className="text-[40px]">
                <p>CORE</p>
                <p>FEATURES</p>
              </div>
              <div className="mt-5">
                <p>You can find fun social</p>
                <p>experiences here and earn </p>
                <p>real money.</p>
              </div>
            </div>

            <div className="lg:flex">
              {/* 中 */}
              <div>
                <div className="flex justify-start">
                  <div className="mt-6">
                    <img src="/core_icon/m_1.svg" />
                  </div>
                  <div className="ml-8">
                    <p className="text-2xl mb-4">DAO Governance</p>
                    <p>XPA DAO token holders can govern the </p>
                    <p>X-city social platform by participating in </p>
                    <p>on-chain governance.</p>
                  </div>
                </div>
                <div className="flex justify-start mt-[120px]">
                  <div className="mt-6">
                    <img src="/core_icon/m_2.svg" />
                  </div>
                  <div className="ml-8">
                    <p className="text-2xl mb-4">Spaces/communities DAO</p>
                    <p>Users can deploy DAO tokens for their own</p>
                    <p>spaces/communities, then set rules and </p>
                    <p>manage them by their own DAO token.</p>
                  </div>
                </div>
                <div className="flex justify-start mt-[120px]">
                  <div className="mt-6">
                    <img src="/core_icon/m_3.svg" />
                  </div>
                  <div className="ml-8">
                    <p className="text-2xl mb-4">Treasury</p>
                    <p>The XPACE owns an on-chain pot of funds </p>
                    <p>for the promotion and development of the </p>
                    <p>ecosystem.</p>
                  </div>
                </div>
                <div className="flex justify-start mt-[120px]">
                  <div className="mt-6">
                    <img src="/core_icon/m_4.svg" />
                  </div>
                  <div className="ml-8">
                    <p className="text-2xl mb-4">NFTs</p>
                    <p>Turn your creations and spaces on XPACE </p>
                    <p>into NFTs, and rent or sell them to others.</p>
                  </div>
                </div>
              </div>

              {/* 右 */}
              <div className="mt-[120px] lg:mt-0 lg:ml-16">
                <div className="flex justify-start">
                  <div className="mt-6">
                    <img src="/core_icon/r_1.svg" />
                  </div>
                  <div className="ml-8">
                    <p className="text-2xl mb-4">Fun & Convenient</p>
                    <p>High personalized friends recommendation, </p>
                    <p>fun and convenient experience in </p>
                    <p>communication.</p>
                  </div>
                </div>
                <div className="flex justify-start mt-[120px]">
                  <div className="mt-6">
                    <img src="/core_icon/r_2.svg" />
                  </div>
                  <div className="ml-8">
                    <p className="text-2xl mb-4">Surf to earn & Rent to earn</p>
                    <p>Surf to earn from advertisement slots and  </p>
                    <p>the data you delegate (recorded on-chain) to </p>
                    <p>XPACE. Rent advertisement slots in your </p>
                    <p>space directly to advertisers.</p>
                  </div>
                </div>
                <div className="flex justify-start mt-[120px]">
                  <div className="mt-6">
                    <img src="/core_icon/r_3.svg" />
                  </div>
                  <div className="ml-8">
                    <p className="text-2xl mb-4">Expand your estates</p>
                    <p>Create and expand your land and spaces in </p>
                    <p>the X-city world.</p>
                  </div>
                </div>
                <div className="flex justify-start mt-[120px]">
                  <div className="mt-6">
                    <img src="/core_icon/r_4.svg" />
                  </div>
                  <div className="ml-8">
                    <p className="text-2xl mb-4">Unique Algorithms</p>
                    <p>XPACE's unique algorithms make your profit</p>
                    <p>performance better.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hidden lg:block h-[200px]"/>

      </main>
    </div>
  );
}
