import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation(['homepage', 'common'])

  return (
    <div>
      <Head>
        <title>{t('title', { ns: 'common' })}</title>
        <meta name="description" content="Xpace" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main>
        <section id="Home">
          <div className="lg:mb-20 lg:flex justify-between object-scale-down lg:bg-[url('/background/bg.svg')] bg-no-repeat bg-cover">
            {/* 左區 */}
            <div className="lg:ml-20">
              <div className="mt-10 lg:mt-40 ">
                <div className="flex justify-center animate-moving lg:hidden">
                  <Image
                    src="/Astronaut.png"
                    width={232}
                    height={300}
                    layout="fixed"
                  />
                </div>
                <div className="hidden lg:block">
                <img src="/surf_to_earn_banner.svg" />
                </div>
                <div className="flex justify-center lg:hidden">
                <img src="/surf_to_earn_banner.svg" />
                </div>
               
              </div>
              <div className="flex justify-around lg:justify-start text-white font-bold font-[Montserrat] text-lg lg:text-xl mt-10">
                <div className="flex lg:mr-14 items-center">
                  <img src="/icon1.svg" className="mr-2" />
                  <p>CLOSER</p>
                </div>
                <div className="flex lg:mr-14 items-center">
                  <img src="/icon2.svg" className="mr-2" />
                  <p>RICHER</p>
                </div>
                <div className="flex lg:mr-14 items-center">
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
              <div className="block lg:hidden text-white font-[Montserrat] text-sm mt-6 text-center px-3">
                <p>
                  The XPACE team is building a super cool and convenient social
                  platform that you can govern and earn from your data in this
                  social platform, X-city. You can think of it as a hybrid of
                  Reddit, Gather Town, and Facebook.
                </p>
              </div>
              <div className="hidden lg:block mt-[60px] mb-80 ">
                <button className={styles.discover}>Discover X-city </button>
              </div>
              <div className="flex lg:hidden mt-6 justify-center">
                <button className={styles.discover_m}>Discover X-city </button>
              </div>
            </div>

            {/* 太空人 */}
            <div className=" animate-moving">
              <img
                src="Astronaut.png"
                className="hidden lg:block max-w-full max-h-full -rotate-[3.78deg] "
              />
            </div>

            {/* 側邊欄 */}
            {/* <div className="hidden lg:flex mr-[75px] mt-72  ">
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
            </div> */}
          </div>
        </section>

        <div className="block lg:hidden h-[100px]" />
        {/*2nd Background div */}
        <div className="lg:bg-[url('/background/bg1.svg')] bg-no-repeat bg-cover pb-[65px]">
          <section id="about">
            <div className="lg:flex justify-between font-[Montserrat]">
              <div className="text-white text-[40px] lg:mt-10 ml-6 lg:ml-20 font-semibold leading-tight">
                <p>{t('vision.title')}</p>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className={styles.about_bar}></div>
                <div className="text-white lg:mr-[100px] lg:bg-[url('/About_banner_1.png')] bg-right bg-no-repeat bg-cover bg-opacity-20">
                  <div className=" lg:mr-72 mb-5 pb-5">
                    <p className="text-4xl ml-3 lg:ml-0 ">{t('vision.community.title')}</p>
                    <div className={styles.about_bar_m}></div>
                    <div className="hidden lg:block mt-5">
                      <p>
                        {t('vision.community.description')}
                      </p>
                    </div>
                    {/* mobile ver. */}
                    <div className="block lg:hidden bg-[url('/About_banner_1.png')] bg-right bg-no-repeat bg-cover mt-5 px-6">
                      {t('vision.community.description')}
                    </div>
                  </div>
                </div>
                <div className={styles.about_bar_1}></div>
                <div className="text-white lg:mr-[100px] lg:bg-[url('/About_banner_2.png')] bg-right bg-no-repeat bg-cover">
                  <div className=" lg:mr-72 pb-5">
                    <p className="text-4xl ml-3 lg:ml-0">{t('vision.social.title')}</p>
                    <div className={styles.about_bar_m1}></div>
                    <div className="hidden lg:block mt-5">
                      <p>
                        {t('vision.social.description')}
                      </p>
                    </div>
                    {/* mobile ver. */}
                    <div className="block lg:hidden bg-[url('/About_banner_2.png')] bg-right bg-no-repeat bg-cover mt-5 px-6">
                      {t('vision.social.description')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="h-[100px] lg:h-[200px]" />

          <section id="Core features">
            <div className="lg:flex justify-around text-white">
              {/* 左 */}
              <div className="ml-6 lg:ml-6">
                <div className="text-[40px] font-semibold leading-tight">
                  <p>{t('features.title')}</p>
                </div>
              </div>

              <div className="lg:flex mt-6 lg:mt-0">
                {/* 中 */}
                <div className="ml-6 lg:ml-0">
                  <div className="flex justify-start">
                    <div className="mt-6">
                      <img src="/core_icon/m_1.svg" />
                    </div>
                    <div className="ml-8">
                      <p className="text-2xl mb-4">{t('features.dao.title')}</p>
                      <p>{t('features.dao.description')}</p>
                    </div>
                  </div>
                  <div className="flex justify-start lg:mt-[120px] mt-20">
                    <div className="mt-6">
                      <img src="/core_icon/m_2.svg" />
                    </div>
                    <div className="ml-8">
                      <p className="text-2xl mb-4">{t('features.dataController.title')}</p>
                      <p>{t('features.dataController.description')}</p>
                    </div>
                  </div>
                  <div className="flex justify-start lg:mt-[120px] mt-20">
                    <div className="mt-6">
                      <img src="/core_icon/m_3.svg" />
                    </div>
                    <div className="ml-8">
                      <p className="text-2xl mb-4">{t('features.treasury.title')}</p>
                      <p>{t('features.treasury.description')}</p>
                    </div>
                  </div>
                  <div className="flex justify-start lg:mt-[120px] mt-20">
                    <div className="mt-6">
                      <img src="/core_icon/m_4.svg" />
                    </div>
                    <div className="ml-8">
                      <p className="text-2xl mb-4">{t('features.nfts.title')}</p>
                      <p>{t('features.nfts.description')}</p>
                    </div>
                  </div>
                </div>

                {/* 右 */}
                <div className="mt-20 ml-6 lg:mt-0 lg:ml-16">
                  <div className="flex justify-start">
                    <div className="mt-6">
                      <img src="/core_icon/r_1.svg" />
                    </div>
                    <div className="ml-8">
                      <p className="text-2xl mb-4">{t('features.funAndConvenient.title')}</p>
                      <p>{t('features.funAndConvenient.description')}</p>
                    </div>
                  </div>
                  <div className="flex justify-start lg:mt-[120px] mt-20">
                    <div className="mt-6">
                      <img src="/core_icon/r_2.svg" />
                    </div>
                    <div className="ml-8">
                      <p className="text-2xl mb-4">
                      {t('features.socialToEarn.title')}
                      </p>
                      <p>{t('features.socialToEarn.description')}</p>
                    </div>
                  </div>
                  <div className="flex justify-start lg:mt-[120px] mt-20">
                    <div className="mt-6">
                      <img src="/core_icon/r_3.svg" />
                    </div>
                    <div className="ml-8">
                      <p className="text-2xl mb-4">{t('features.expandEstates.title')}</p>
                      <p>{t('features.expandEstates.description')}</p>
                    </div>
                  </div>
                  <div className="flex justify-start lg:mt-[120px] mt-20">
                    <div className="mt-6">
                      <img src="/core_icon/r_4.svg" />
                    </div>
                    <div className="ml-8">
                      <p className="text-2xl mb-4">{t('features.customerFirst.title')}</p>
                      <p>{t('features.customerFirst.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="h-[100px] lg:h-[135px]" />
          {/* 2nd background div end */}
        </div>
        <section id="Tokenomics" className="font-[Montserrat]">
          <div className="hidden text-white lg:flex justify-around">
            <div className="text-[40px] ml-20 mr-[218px] font-semibold leading-tight">
              <div className="hidden lg:block">
                <p>{t('tokenomics.title')}</p>
              </div>
            </div>
            {/* desktop */}
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
                <div className=" w-[400px] hidden xl:block">
                  <Image src="/Token_allo.svg" width={347} height={347} />
                </div>
              </div>
              <div className="block xl:hidden">
                <Image src="/Token_allo.svg" width={347} height={347} />
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="block lg:hidden text-white">
            <div className="text-[40px] ml-3 font-semibold leading-tight">
              Tokenomics
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mt-16">
                <p>TOKEN SYMBOL</p>
                <p className="text-2xl font-bold mt-5">XPA</p>
              </div>
              <div className="mt-10">
                <p>INITIAL CIRCULATION</p>
                <p className="text-2xl font-bold mt-5">50,000,000</p>
              </div>
              <div className="mt-10">
                <p>INITIAL PUBLIC SALE PRICE</p>
                <p className="text-2xl font-bold mt-5">$0.1</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-start">
              <p className="mt-16 text-[#626DFF] text-xl leading-5 font-semibold">
                TOKEN <br /> ALLOCATION
              </p>
              <div className=" mt-10 ml-16 flex">
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
                  <p className=" text-lg leading-5 font-semibold">Liquidity</p>
                  <p className=" text-sm mt-2">5% TGE, 5% pubilc sale</p>
                </div>
              </div>
              <div className=" mt-12 flex">
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
                  <p className=" text-lg leading-5 font-semibold">Send Round</p>
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
              <div className="block lg:hidden">
                <Image
                  src="/Token_allo.svg"
                  width={347}
                  height={347}
                  layout="fixed"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <div className="hidden lg:block h-[400px] bg-[url('/BG.png')] bg-no-repeat bg-center bg-contain"></div> */}
        {/* 3rd background */}
        <div className="lg:bg-[url('/background/bg3.svg')] bg-no-repeat bg-cover">
          <div className="h-[100px]  lg:h-[160px]" />
          <section id="Roadmap">
            <div className="w-full text-center text-[40px] font-semibold leading-tight text-white">
              <p>ROADMAP</p>
            </div>

            <div className="hidden lg:flex justify-center mt-[100px]">
              {/* 左區 */}
              <div className=" w-[450px] relative text-end text-white mr-[100px]">
                {/* 2022Q4 */}
                <div className="absolute right-0 font-noraml mt-16 mr-auto ">
                  <div className="md:w-[360px] md:h-[68px] bg-[#626DFF] ">
                    <h6 className="text-4xl font-medium leading-9 font-[Montserrat] pt-4 mr-6">
                      2022 Q4
                    </h6>
                  </div>
                  <div className="md:w-[360px] md:h-[96px] bg-[#626DFF] bg-opacity-20 ">
                    <h6 className=" text-sm font-[Montserrat] pt-4 mr-6">
                      X-city alpha
                      <br />
                      First batch of citizens check-in
                      <br />
                      Launch xpace community
                    </h6>
                  </div>
                </div>
                {/* 2023 Q2 */}
                <div className="font-noraml mt-[270px] mr-6">
                  <h6 className="text-4xl font-medium leading-9 font-[Montserrat] pt-4">
                    2023 Q2
                  </h6>
                  <h6 className=" text-sm font-[Montserrat] pt-8">
                    Distribute the rest of the initial tokens x-pet plugin beta
                    <br />
                    Add bbs layer1 scenes for x-city
                    <br />
                    Add organizations scenes for x-city
                  </h6>
                </div>
                {/* 2023 Q4 */}
                <div className="font-noraml mt-[115px] mr-6">
                  <h6 className="text-4xl font-medium leading-9 font-[Montserrat] pt-4">
                    2023 Q4
                  </h6>
                  <h6 className=" text-sm font-[Montserrat] pt-8">
                    Organize the first fair in x-city
                    <br />
                    Launch xpa dao
                  </h6>
                </div>
              </div>

              {/* 時間軸 */}
              <div className="relative flex flex-col w-[3px] items-center justify-center mr-6">
                <div className="h-[100px] w-[1px] bg-[#626DFF] z-0" />
                <span className="flex h-2 w-2 justify-center items-center">
                  <span className="animate-pulse absolute inline-flex h-2 w-2 rounded-full bg-white "></span>
                </span>

                <div className="items-center h-[880px] w-[1px] bg-gradient-to-b from-[#565DFF]  bg-opacity-60 z-0">
                  <span className="absolute left-0 z-30 mt-[128px] h-1 w-1 rounded-full bg-white "></span>
                  <span className="absolute left-0 z-30 mt-[256px] h-1 w-1 rounded-full bg-white "></span>
                  <span className="absolute left-0 z-30 mt-[384px] h-1 w-1 rounded-full bg-white "></span>
                  <span className="absolute left-0 z-30 mt-[512px] h-1 w-1 rounded-full bg-white "></span>
                  <span className="absolute left-0 z-30 mt-[640px] h-1 w-1 rounded-full bg-white "></span>
                </div>
              </div>

              {/* 右區 */}
              <div className=" w-[450px] font-noraml text-white mt-[205px] ml-[100px]">
                {/* 2023 Q1 */}
                <div>
                  <h6 className="text-4xl font-medium leading-9 font-[Montserrat] pt-4">
                    2023 Q1
                  </h6>
                  <h6 className=" text-sm font-[Montserrat] pt-8">
                    Community and public sales
                    <br />
                    X-city browser version beta
                    <br />
                    X-city app version beta
                    <br />
                    X-city installation version beta <br />
                    X-city sdk
                  </h6>
                </div>
                <div className="mt-[70px]">
                  <h6 className="text-4xl font-medium leading-9 font-[Montserrat] pt-4">
                    2023 Q3
                  </h6>
                  <h6 className=" text-sm font-[Montserrat] pt-8">
                    X-Browser beta
                    <br />
                    Add BBS layer2 scenes for X-city
                    <br />
                    Add Rooms
                  </h6>
                </div>

                <div className="mt-[115px]">
                  <h6 className="text-4xl font-medium leading-9 font-[Montserrat] pt-4">
                    2024 Q1
                  </h6>
                  <h6 className=" text-sm font-[Montserrat] pt-8">
                    Add skins and weapons
                  </h6>
                </div>
              </div>
            </div>
          </section>
          {/* mobile roadmap */}
          <div className="lg:hidden mt-10 flex flex-col items-center">
            <div className="flex justify-between w-2/3">
              {/* 時間軸 */}
              <div className="relative flex flex-col w-[3px] items-center justify-center mr-6">
                <div className="h-[30px] w-[1px] bg-[#626DFF] z-0" />
                <span className="flex h-2 w-2 justify-center items-center">
                  <span className="animate-pulse absolute inline-flex h-2 w-2 rounded-full bg-white "></span>
                </span>
                <div className="h-[120px] w-[1px] bg-[#626DFF] z-0" />

                <div className="items-center h-[800px] w-[1px] bg-gradient-to-b from-[#565DFF]   z-0">
                  <span className="absolute left-0 z-30 mt-[20px] h-1 w-1 rounded-full bg-white/60 "></span>
                  <span className="absolute left-0 z-30 mt-[207px] h-1 w-1 rounded-full bg-white/60 "></span>
                  <span className="absolute left-0 z-30 mt-[376px] h-1 w-1 rounded-full bg-white/60 "></span>
                  <span className="absolute left-0 z-30 mt-[524px] h-1 w-1 rounded-full bg-white/60 "></span>
                  <span className="absolute left-0 z-30 mt-[653px] h-1 w-1 rounded-full bg-white/60 "></span>
                </div>
              </div>
              <div className="text-white">
                {/* 2022Q4 */}
                <div>
                  <div className="w-[250px] mt-[5px] bg-[#626DFF] ">
                    <h6 className="text-3xl font-medium leading-9 font-[Montserrat] py-2 mr-6">
                      2022 Q4
                    </h6>
                  </div>
                  <div className="w-[250px] bg-[#626DFF] bg-opacity-20 ">
                    <h6 className=" text-sm font-[Montserrat] pt-2 pb-3 mr-6">
                      X-city alpha
                      <br />
                      First batch of citizens check-in
                      <br />
                      Launch xpace community
                    </h6>
                  </div>
                </div>
                {/* 2023 Q1 */}
                <div>
                  <h6 className="mt-4 text-3xl font-medium leading-9 font-[Montserrat] py-2">
                    2023 Q1
                  </h6>
                  <h6 className=" text-sm font-[Montserrat] pt-2 pb-3">
                    Community and public sales
                    <br />
                    X-city browser version beta
                    <br />
                    X-city app version beta
                    <br />
                    X-city installation version beta <br />
                    X-city sdk
                  </h6>
                </div>
                {/* 2023 Q2 */}
                <div>
                  <h6 className="mt-4 text-3xl font-medium leading-9 font-[Montserrat] py-2">
                    2023 Q2
                  </h6>
                  <h6 className=" text-sm font-[Montserrat] pt-2 pb-3">
                    Distribute the rest of the initial tokens <br />
                    x-pet plugin beta
                    <br />
                    Add bbs layer1 scenes for x-city
                    <br />
                    Add organizations scenes for x-city
                  </h6>
                </div>
                {/* 2023 Q3 */}
                <div>
                  <h6 className="mt-4 text-3xl font-medium leading-9 font-[Montserrat] py-2">
                    2023 Q3
                  </h6>
                  <h6 className=" text-sm font-[Montserrat] pt-2 pb-3">
                    X-Browser beta
                    <br />
                    Add BBS layer2 scenes for X-city
                    <br />
                    Add Rooms
                  </h6>
                </div>
                {/* 2023 Q4 */}
                <div>
                  <h6 className="mt-4 text-3xl font-medium leading-9 font-[Montserrat] py-2">
                    2023 Q4
                  </h6>
                  <h6 className=" text-sm font-[Montserrat] pt-2 pb-3">
                    Organize the first fair in x-city
                    <br />
                    Launch xpa dao
                  </h6>
                </div>
                {/* 2024 Q1 */}
                <div>
                  <h6 className="mt-4 text-3xl font-medium leading-9 font-[Montserrat] py-2">
                    2024 Q1
                  </h6>
                  <h6 className=" text-sm font-[Montserrat] pt-2 pb-3">
                    Add skins and weapons
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[60px] lg:h-[160px]" />
          {/* <section id="Team">
            <div className="w-full text-center text-[40px] font-semibold leading-tight text-white">
              <p>TEAM & ADVISORS</p>
            </div>
            <div className="h-16 lg:h-[160px]" />
            <div className="flex flex-col items-center lg:flex-row lg:items-baseline justify-center text-white">
              <div className="mt-6 lg:mt-0 mr-3">
                <Image src="/profile_pic.png" width={270} height={270} />
                <div className="-mt-2 h-[105px] bg-black text-2xl leading-5 font-bold">
                  <h1 className="pl-4 pt-6">MARC C.</h1>
                  <h1 className="pl-4 mt-3 text-lg leading-5">CEO</h1>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 mr-3">
                <Image src="/profile_pic.png" width={270} height={270} />
                <div className="-mt-2 h-[105px] bg-black text-2xl leading-5 font-bold">
                  <h1 className="pl-4 pt-6">ASIER P.</h1>
                  <h1 className="pl-4 mt-3 text-lg leading-5">CTO</h1>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 mr-3">
                <Image src="/profile_pic.png" width={270} height={270} />
                <div className="-mt-2 h-[105px] bg-black text-2xl leading-5 font-bold">
                  <h1 className="pl-4 pt-6">PATXI B.</h1>
                  <h1 className="pl-4 mt-3 text-lg leading-5">CMO</h1>
                </div>
              </div>
              <div className="mt-6 lg:mt-0 mr-3">
                <Image src="/profile_pic.png" width={270} height={270} />
                <div className="-mt-2 h-[105px] bg-black text-2xl leading-5 font-bold">
                  <h1 className="pl-4 pt-6">XAVI P.</h1>
                  <h1 className="pl-4 mt-3 text-lg leading-5">Production</h1>
                </div>
              </div>
            </div>
          </section>
          <div className="h-[100px] lg:h-[160px]" />

          <div className="w-full text-center text-[40px] font-semibold leading-tight text-white">
            <p>OUR PARTNERS</p>
          </div> */}
          {/* 3rd bg end */}
        </div>
        {/* <section id="partner">
          <div className="hidden lg:flex justify-center mt-20">
            <div className="mr-6">
              <Image src="/partner/VC1.png" width={160} height={60} />
            </div>
            <div className="mr-6">
              <Image src="/partner/VC2.png" width={160} height={60} />
            </div>
            <div className="mr-6">
              <Image src="/partner/VC3.png" width={160} height={60} />
            </div>
            <div className="mr-6">
              <Image src="/partner/VC4.png" width={160} height={60} />
            </div>
            <div className="mr-6">
              <Image src="/partner/VC5.png" width={160} height={60} />
            </div>
          </div> */}
          {/* mobile */}
          {/* <div className="flex flex-col items-center lg:hidden mt-20">
            <div className="flex w-11/12 justify-center">
              <div className="mr-6">
                <Image src="/partner/VC1.png" width={160} height={60} />
              </div>
              <div className="mr-6">
                <Image src="/partner/VC2.png" width={160} height={60} />
              </div>
              <div>
                <Image src="/partner/VC3.png" width={160} height={60} />
              </div>
            </div>
            <div className="flex w-11/12 justify-center mt-10">
              <div className="mr-6">
                <Image src="/partner/VC4.png" width={160} height={60} />
              </div>
              <div>
                <Image src="/partner/VC5.png" width={160} height={60} />
              </div>
            </div>
          </div>
        </section> */}
        <div className="h-[100px] lg:h-[160px]" />
        <section id="join">
          <div className="flex flex-col items-center lg:bg-[url('/background/bg4.png')] bg-no-repeat bg-cover pb-[200px] w-full text-white">
            <h1 className=" text-xl leading-8 lg:text-[32px] lg:leading-10 font-thin font-[zero] text-center">
              JOIN THE FUTURE <br /> COMMUNITY
            </h1>
            <h1 className=" text-lg leading-[48px] font-medium font-[Montserrat] mt-6">
              {t('footer.subSlogan', { ns: 'common' })}
            </h1>
            <div className="block h-[100px] lg:hidden" />
            <button className={styles.follow}>Follow US </button>
            <h1 className="mt-8 font-medium font-[Montserrat]">
              {t('footer.followUs.description', { ns: 'common' })}
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['homepage', 'menu', 'common'])),
      // Will be passed to the page component as props
    },
  }
}
