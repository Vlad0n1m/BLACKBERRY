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
      <title>BLACKБЕРРИ: Главная</title>

      </Head>
      <div className="flex flex-col gap-[20px] sm:gap-[80px]">
        <Navbar />
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