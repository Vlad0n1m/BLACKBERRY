import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import HeaderNav from "../components/HeaderNav/HeaderNav";
const Index = () => {
  return (
    <Container>
      <div className="flex flex-col gap-[20px] sm:gap-[80px]">
        <Navbar />
        <Header />
        <HeaderNav />
      </div>
    </Container>
  );
};

export default Index;