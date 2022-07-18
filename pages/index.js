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
        <div className="flex justify-between">
          
          {/* 左區 */}
          <div className="ml-20">
            <div className="mt-40 ">
              <img src="/surf_to_earn_banner.svg" />
            </div>
            <div className="flex justify-start text-white font-bold font-[Montserrat] text-xl mt-10">
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
            <div className="text-white font-[Montserrat] text-sm mt-20">
                <p>The XPACE team is building a super cool and convenient social platform</p>
                <p>that you can govern and earn from your data in this social platform, X-city. </p>
                <p>You can think of it as a hybrid of Reddit, Gather Town, and Facebook.</p>
            </div>
            <div className=" mt-[60px] mb-80 ">
                <button className={styles.discover}>Discover X-city </button>
            </div>
          </div>

          {/* 太空人 */}
          <div>
          <img src="Astronaut.png" className=" w-[631.52px] h-[846.24px]" />
          </div>

          {/* 側邊欄 */}
          <div className="mr-10">
            <div className={styles.link_bar} />
          </div>
        </div>
      </section>
    </div>
  );
}
