import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

const xcity = () => {
  return (
    <div>
      <Head>
        <title>BBS X-city</title>
        <meta name="description" content="Xpace" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <div className="flex flex-col items-center text-white ">
        <div className="hidden lg:block h-[140px]" />
        <div className="flex justify-center lg:justify-between w-full items-center">
          <h1 className=" lg:text-[32px] lg:text-left leading-10 font-[zero] text-center lg:ml-20">
            The Coolest <br />
            BBS COMMUNITY
          </h1>
          <div className="hidden lg:mr-28 lg:block">
            <Image src="/logo/Footer_logo.svg" width={62} height={46} />
          </div>
          <div className="block lg:hidden">
            <Image src="/logo/Footer_logo.svg" width={30} height={30} />
          </div>
        </div>
        <div className="flex justify-start lg:w-full">
          <h1 className="lg:ml-20 lg:text-2xl leading-5 font-medium font-[Montserrat] mt-14">
            DAO Governance
          </h1>
        </div>
        <div className="hidden lg:block h-[180px]" />
      </div>
      <div className="hidden lg:block h-[480px] bg-[url('/x_city/BG1.png')] bg-no-repeat bg-center bg-contain"></div>

      <div className="flex flex-col items-center text-white ">
        <div className="hidden lg:block h-[160px]" />
        <section id="exploration">
          <div >
            <h1 className="text-center text-[40px] leading-[48px] font-semibold font-[Montserrat]">PLANETS EXPLORATION</h1>
            <h2 className=" text-2xl  font-medium text-center mt-8">
              Explore fun on every planet in the X-city world. Various <br/>landscapes and hiding events bring more exciting <br/>experiences for you.
            </h2>
          </div>
        </section>
        <div className="flex flex-row justify-between w-5/6 mt-[100px]">
            <Image src="/x_city/planet.png" width={80} height={80} />
            <Image src="/x_city/planet_1.png" width={80} height={80} />
            <Image src="/x_city/planet_2.png" width={80} height={80} />
            <Image src="/x_city/planet_3.png" width={80} height={80} />
            <Image src="/x_city/planet_4.png" width={80} height={80} />
            <Image src="/x_city/planet_5.png" width={80} height={80} />
            <Image src="/x_city/planet_6.png" width={80} height={80} />
            <Image src="/x_city/planet_7.png" width={80} height={80} />
        </div>
        <div className="w-11/12 mt-44">
          <Image src="/x_city/app.png" width={1280} height={630}  layout="responsive"/>
        </div>
        <div className="h-1 lg:w-[480px] w-2/3 mt-[60px] relative">
          <div className="absolute rounded h-1 w-full lg:w-[480px] bg-white opacity-20" />
          <div className="absolute rounded h-1 w-1/2 lg:w-[240px] bg-[#626DFF] left-1/4" />
        </div>
        <div className="hidden lg:block h-[140px]" />
        {/* feature icon set */}
        <div className="hidden lg:flex justify-between w-1/2 text-white text-2xl leading-5 font-medium text-center">
          <div>
            <Image src="/x_city/icon1.svg" width={60} height={60} layout="fixed" />
            <p className="mt-6"> Surf to earn </p>
          </div>
          <div>
          <Image src="/x_city/icon2.svg" width={60} height={60} layout="fixed" />
            <p className="mt-6">Become KOL</p>
          </div>
          <div>
          <Image src="/x_city/icon3.svg" width={60} height={60} layout="fixed" />
            <p className="mt-6">Space Travel</p>
          </div>
          <div>
          <Image src="/x_city/icon4.svg" width={60} height={60} layout="fixed" />
            <p className="mt-6">Video Chat</p>
          </div>
        </div>
        <div className="hidden lg:flex mt-24 justify-between w-1/2 text-white text-2xl leading-5 font-medium text-center">
          <div>
            <Image src="/x_city/icon5.svg" width={60} height={60} layout="fixed" />
            <h1 className="mt-6"> Assets </h1>
          </div>
          <div>
          <Image src="/x_city/icon6.svg" width={60} height={60} layout="fixed" />
            <p className="mt-6">Meet Friends</p>
          </div>
          <div>
          <Image src="/x_city/icon7.svg" width={60} height={60} layout="fixed" />
            <p className="mt-6">Arena</p>
          </div>
          <div>
          <Image src="/x_city/icon8.svg" width={60} height={60} layout="fixed" />
            <p className="mt-6">More fun</p>
          </div>
        </div>
        <div className="hidden lg:block h-[120px]" />

        {/* Slide show to be inserted */}
        <div className="flex flex-col">
            <Image src="/x_city/crown.svg" width={60} height={60}/>
            <p className="mt-3 text-center text-white text-[40px] leading-[48px] font-semibold">WHO IS<br/>THE ISSUE KING</p>
        </div>
        <div className="w-3/4 mt-24">
          <Image src="/x_city/problem_change_card.png" width={1120} height={534}  layout="responsive"/>
        </div>
        <div className="hidden lg:block h-[160px]" />
        <div className="flex justify-center items-center">
          <p className=" mr-5 text-[40px] leading-[48px] font-semibold text-white">THE COOLEST<br/>BBS COMMUNITY</p>
          <Image src="/x_city/take_me_home_box.svg" width={190} height={86}  layout="fixed"/>
        </div>
        <div className="hidden lg:block h-[120px]" />
        <div className="flex flex-row justify-between w-5/6">
            <Image src="/x_city/pet.png" width={160} height={160} />
            <Image src="/x_city/pet.png" width={160} height={160} />
            <Image src="/x_city/pet.png" width={160} height={160} />
            <Image src="/x_city/pet.png" width={160} height={160} />
            <Image src="/x_city/pet.png" width={160} height={160} />           
        </div>
        
        <div className="hidden lg:block h-[160px]" />
        <section id="join">
          <div className="flex flex-col items-center text-white">
            <h1 className=" lg:text-[32px] leading-10 font-thin font-[zero] text-center">
              JOIN THE FUTURE <br /> COMMUNITY
            </h1>
            <h1 className=" lg:text-2xl leading-[48px] font-medium font-[Montserrat] mt-6">
              To meet many fun and smart people
            </h1>
            <button className={styles.follow}>Follow US </button>
            <h1 className="mt-8 font-medium">
              Get notified about important xpace updates
            </h1>
          </div>
        </section>
        <div className="hidden lg:block h-[110px]" />

      </div>

    </div>
  );
};

export default xcity;
