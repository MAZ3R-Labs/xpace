import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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
          <div className="lg:flex justify-between font-[Montserrat]">
            <div className="text-white text-[40px] mt-10 lg:ml-20 font-semibold leading-tight">
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
        <div className="hidden lg:block h-[200px]" />

        <section id="Core features">
          <div className="lg:flex justify-around text-white">
            {/* 左 */}
            <div>
              <div className="text-[40px] font-semibold leading-tight">
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
                    <p>Surf to earn from advertisement slots and </p>
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
                    <p>XPACE&apos;s unique algorithms make your profit</p>
                    <p>performance better.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hidden lg:block h-[200px]" />
        <section id="Tokenomics" className="font-[Montserrat]">
          <div className="text-white lg:flex">
            <div className="text-[40px] ml-20 mr-[218px] font-semibold leading-tight">
              <p>Token-</p>
              <p>omics</p>
            </div>
            <div>
              <div className="flex text-base">
                <p className=" mr-[60px]">TOKEN SYMBOL</p>
                <p className=" mr-[60px]">INITIAL CIRCULATION</p>
                <p>INITIAL PUBLIC SALE PRICE</p>
              </div>
              <div className="flex text-2xl font-bold mt-7">
                <p className="mr-[140px]">XPA</p>
                <p className="mr-[94px]">50,000,000</p>
                <p>$0.1</p>
              </div>
              <div className="flex mt-[133px]">
                {/* 左區 */}
                <div className=" basis-[380px] mr-14">
                  <p className="text-[#626DFF] text-xl leading-5 font-semibold">
                    TOKEN <br /> ALLOCATION
                  </p>
                  <div className=" mt-14 flex">
                    <div className="mr-6">
                      <p className="text-2xl font-semibold leading-5">55%</p>
                      <div className=" w-12 h-[2px] mt-5 bg-gradient-to-r from-[#00BDD7] to-white" />
                    </div>
                    <div>
                      <p className=" text-lg leading-5 font-semibold">
                        Ecosystem&Foundation
                      </p>
                      <p className=" text-sm mt-2">5% TGE, 5% pubilc sale</p>
                    </div>
                  </div>

                  <div className=" mt-12 flex">
                    <div className="mr-6">
                      <p className="text-2xl font-semibold leading-5">5%</p>
                      <div className=" w-12 h-[2px] mt-5 bg-gradient-to-r from-[#4D11FA] to-white" />
                    </div>
                    <div>
                      <p className=" text-lg leading-5 font-semibold">
                        Team&Advisors
                      </p>
                      <p className=" text-sm mt-2">5% TGE, 5% pubilc sale</p>
                    </div>
                  </div>

                  <div className=" mt-12 flex">
                    <div className="mr-6">
                      <p className="text-2xl font-semibold leading-5">5%</p>
                      <div className=" w-12 h-[2px] mt-5 bg-gradient-to-r from-[#FA5711] to-white" />
                    </div>
                    <div>
                      <p className=" text-lg leading-5 font-semibold">
                        Liquidity
                      </p>
                      <p className=" text-sm mt-2">5% TGE, 5% pubilc sale</p>
                    </div>
                  </div>
                </div>

                {/* 右區 */}
                <div className=" basis-[280px]">
                  <div className=" mt-1 flex">
                    <div className="mr-6">
                      <p className="text-2xl font-semibold leading-5">5%</p>
                      <div className=" w-12 h-[2px] mt-5 bg-gradient-to-r from-[#FFC700] to-white" />
                    </div>
                    <div>
                      <p className=" text-lg leading-5 font-semibold">
                        Private Sale
                      </p>
                      <p className=" text-sm mt-2">5% TGE, 5% pubilc sale</p>
                    </div>
                  </div>
                  <div className=" mt-12 flex">
                    <div className="mr-6">
                      <p className="text-2xl font-semibold leading-5">5%</p>
                      <div className=" w-12 h-[2px] mt-5 bg-gradient-to-r from-[#00BC35] to-white" />
                    </div>
                    <div>
                      <p className=" text-lg leading-5 font-semibold">
                        Public Sale
                      </p>
                      <p className=" text-sm mt-2">5% TGE, 5% pubilc sale</p>
                    </div>
                  </div>
                  <div className=" mt-12 flex">
                    <div className="mr-6">
                      <p className="text-2xl font-semibold leading-5">10%</p>
                      <div className=" w-12 h-[2px] mt-5 bg-gradient-to-r from-[#1152FA] to-white" />
                    </div>
                    <div>
                      <p className=" text-lg leading-5 font-semibold">
                        Send Round
                      </p>
                      <p className=" text-sm mt-2">5% TGE, 5% pubilc sale</p>
                    </div>
                  </div>
                  <div className=" mt-12 flex">
                    <div className="mr-6">
                      <p className="text-2xl font-semibold leading-5">15%</p>
                      <div className=" w-12 h-[2px] mt-5 bg-gradient-to-r from-[#FF34DF] to-white" />
                    </div>
                    <div>
                      <p className=" text-lg leading-5 font-semibold">
                        Founding Team
                      </p>
                      <p className=" text-sm mt-2">5% TGE, 5% pubilc sale</p>
                    </div>
                  </div>
                </div>
                {/* 圓餅圖 */}
                <div className=" w-[400px] hidden lg:block">
                  <Image src="/Token_allo.svg" width={347} height={347} />
                </div>
              </div>
              <div className="block lg:hidden">
                <Image src="/Token_allo.svg" width={347} height={347} />
              </div>
            </div>
          </div>
        </section>
        <div className="hidden lg:block h-[565px]" />
        <section id="Roadmap">
          <div className="w-full text-center text-[40px] font-semibold leading-tight text-white">
            <p>ROADMAP</p>
          </div>

          <div className="w-full flex p-[36px] justify-center items-start  mt-[100px]">

            <div className=" w-[485px] font-noraml text-sm mt-16 text-end">
              <h6 className=" text-4xl font-medium leading-9 font-[Montserrat] mt-5">2022 Q4</h6>
              「Year… 2222, Location… InVaria, Weather… Radiation Fog and
              Cold」Something is happening in this world…
              <br /> <br />
              Build up communication channel… Discord set up… Twitter launched…
              Now we can communicate, discuss with each others about InVaria and
              the ideas we have there!
            </div>
            {/* 時間軸 */}
            <div className="flex flex-col items-center justify-center mr-6">
              <div className="h-[100px] w-[1px] bg-[#626DFF] z-0" />
              <span className="flex h-3 w-3 justify-center items-center">
                <span className="animate-pulse absolute inline-flex h-3 w-3 rounded-full bg-white "></span>
              </span>
              <div className="static h-[880px] w-[1px] bg-[#565DFF] bg-opacity-60 z-0">
        
                <span className=" flex justify-start mt-10 h-2 w-2 rounded-full bg-[#0fda45] "></span>
                <span className=" flex justify-start mt-20 h-2 w-2 rounded-full bg-[#0fda45] "></span>
                <span className=" flex justify-start mt-40 h-2 w-2 rounded-full bg-[#0fda45] "></span>
     
              </div>

            </div>

            {/* 右區 */}
            <div className=" w-[485px] font-noraml text-sm">
              「Year… 2222, Location… InVaria, Weather… Radiation Fog and
              Cold」Something is happening in this world…
              <br /> <br />
              Build up communication channel… Discord set up… Twitter launched…
              Now we can communicate, discuss with each others about InVaria and
              the ideas we have there!
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
