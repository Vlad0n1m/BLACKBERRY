import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import HeaderNav from "../components/HeaderNav/HeaderNav";
import ProductCard from "../components/ProductCard/ProductCard";
import LocationBlock from "../components/LocationBlock/LocationBlock";
import People from "../components/People/People";
import Activivties from "../components/Activities/Activivties";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
const Index = () => {
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="BlackБери: Сеть кофеен"
        />

        <meta name="Author" content="BlackБери: Сеть кофеен" />
        <meta name="referrer" content="always" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <title>BlackБери: Сеть кофеен</title>

        <meta property="og:locale" content="ru_KZ" />
        <meta property="og:title" content="BlackБери: Сеть кофеен" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BlackБери: Сеть кофеен" />

        <meta
          property="og:description"
          content="кофе • выпечка • завтраки • ежедневно 8:00 — 22:00"
        />

        <meta
          name="description"
          content="кофе • выпечка • завтраки • ежедневно 8:00 — 22:00"
        />
        <meta
          name="keywords"
          content="кофе, выпечка, завтраки, ежедневнё, 8:00 — 22:00"
        />
      </Head>

      <div className="flex flex-col gap-[20px] sm:gap-[80px]">
        <Header />
        <HeaderNav />
      </div>
      <ProductCard />
      <LocationBlock />
      <People />
      <Activivties />
      <div className="flex flex-col gap-[20px] sm:gap-[80px]">
        <Form />
        <Footer />
      </div>
    </Container>
  );
};

export default Index;
