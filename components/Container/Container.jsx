import Head from "next/head";
export default function Container({ children }) {
  return (
    <div
      id="container"
      className=" w-[95%] max-w-[380px] sm:max-w-[945px] md:max-w-[1360px] my-[20px] md:my-[24px] flex flex-col gap-[60px] sm:gap-[120px] md:gap-[200px] text-white"
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {children}
    </div>
  );
}
