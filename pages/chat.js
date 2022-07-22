import Head from "next/head";
import Highlights from "../components/Highlights";
import Rainbow from "../components/Rainbow";
import Recommend from "../components/Recommend";
import Slideshow from "../components/SlideShow";
import Topics from "../components/Topics";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Xpace</title>
        <meta name="description" content="Xpace" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className=" pt-10 z-40">
        <div className="flex justify-center ">
          {/* 左區 */}
          <div className="w-100% mr-12">
            {/* 幻燈片 */}
            <div className="h-96 ml-40">
              <Slideshow />
            </div>
            <div className="ml-10">
              <Rainbow text="熱門話題  HOT！" />
              <div className="flex justify-between mt-4">
                <div className="mr-6">
                  <Highlights />
                </div>
                <div className="mr-6">
                  <Highlights />
                </div>
                <div>
                  <Highlights />
                </div>
              </div>
              <div className="mt-9">
                <Rainbow text="快來吧夥伴！就是現在！" />
                <Topics />
              </div>
              <div className="mt-9">
                <Rainbow text="社群房間" />
                <Topics />
              </div>
              <div className="mt-9">
                <Rainbow text="個人房間" />
                <Topics />
              </div>
            </div>
          </div>

          {/* 中央分界線 */}
          <div className={styles.rainbow_box}></div>

          {/* 右區 */}
          <div className="mr-10 mt-24 ml-6">
            <div className="ml-[88px]">
              <Rainbow text="推薦活動" />
            </div>
            <Recommend />
            <Recommend />
            <Recommend />
            <Recommend />
          </div>
        </div>
      </main>
      <div className="h-11"></div>
    </div>
  );
}
