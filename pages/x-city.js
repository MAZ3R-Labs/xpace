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
          <div>
            <h1 className="text-center text-[40px] leading-[48px] font-semibold font-[Montserrat]">PLANETS EXPLORATION</h1>
            <h2 className=" text-2xl leading-5 font-medium text-center mt-8">
              Explore fun on every planet in the X-city world. Various <br/>landscapes and hiding events bring more exciting <br/>experiences for you.
            </h2>
          </div>

        </section>
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
