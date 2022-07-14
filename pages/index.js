import Head from "next/head";
import Highlights from "../components/Highlights";
import Rainbow from "../components/Rainbow";
import Recommend from "../components/Recommend";
import Slideshow from "../components/Slideshow";
import Topic from "../components/Topic";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Xpace</title>
        <meta name="description" content="Xpace" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className=" pt-10 ">
        <div className="flex justify-center ">
          <div className="w-100%">
            <div className="h-96">
              <Slideshow />
            </div>
            <div className="ml-10">
              <Rainbow text="熱門話題  HOT！" />
              <div className="flex justify-between mt-3">
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
              <div className="mt-6">
                <Rainbow text="快來吧夥伴！就是現在！" />
                <div className="flex">
                  <Topic />
                  <div className="ml-12">
                    <Topic />
                  </div>
                  <div className="ml-12">
                    <Topic />
                  </div>
                  <div className="ml-12">
                    <Topic />
                  </div>
                  <div className="ml-12">
                    <Topic />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Rainbow text="社群房間" />
                <div className="flex">
                  <Topic />
                  <div className="ml-12">
                    <Topic />
                  </div>
                  <div className="ml-12">
                    <Topic />
                  </div>
                  <div className="ml-12">
                    <Topic />
                  </div>
                  <div className="ml-12">
                    <Topic />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Rainbow text="個人房間" />
                <div className="flex">
                  <Topic />
                  <div className="ml-12">
                    <Topic />
                  </div>
                  <div className="ml-12">
                    <Topic />
                  </div>
                  <div className="ml-12">
                    <Topic />
                  </div>
                  <div className="ml-12">
                    <Topic />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-10 mt-24">
            <div className="self-center">
              <Rainbow text="推薦活動" />
            </div>
            <Recommend />
            <Recommend />
            <Recommend />
            <Recommend />
          </div>
        </div>
      </main>
    </div>
  );
}
