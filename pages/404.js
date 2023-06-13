import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Page404 from "../components/Page404/Page404";
import Head from "next/head";
export default function Custom404() {
  return (
    <div className="flex flex-col justify-between py-4 h-screen w-[95%] max-w-[380px] sm:max-w-[945px] md:max-w-[1360px]  ">
      <Head>
        <title>BLACKБЕРРИ: 404!</title>
      </Head>
      <Navbar />
      <Page404 /> <Footer />
    </div>
  );
}
