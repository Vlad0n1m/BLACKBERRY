import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Page404 from "../components/Page404/Page404";
import Head from "next/head";
export default function Custom404() {
  return (
    <div className="flex flex-col justify-between py-4 h-screen w-[95%] max-w-[380px] sm:max-w-[945px] md:max-w-[1360px]  ">
      <Head>
        <meta charSet="utf-8"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-title" content="BlackБери"/>

        <title> Ошибка 404 </title>
        <meta name="Author" content="BlackБери"/>
        <meta name="referrer" content="always"/>
        <meta name="googlebot" content="noindex" />
      </Head>
      <Navbar />
      <Page404 /> <Footer />
    </div>
  );
}
