import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Container({ children }) {
  return (
    <div
      id="container"
      className=" w-[95%] max-w-[380px] sm:max-w-[945px] md:max-w-[1360px] my-[20px] md:my-[24px]"
    >
     
      {children}
    </div>
  );
}
