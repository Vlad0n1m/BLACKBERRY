import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
const Index = () => {
  return (
    <Container>
      <div className="flex flex-col gap-[20px] sm:gap-[80px]">
        <Navbar />
        <Header />
      </div>
    </Container>
  );
};

export default Index;