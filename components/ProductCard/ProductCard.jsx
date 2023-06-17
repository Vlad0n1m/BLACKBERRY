import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
export default function ProductCard() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <div
      id="products"
      ref={ref}
      className="flex-col md:flex-row flex gap-[8px] md:gap-[20px] md:justify-between text-white"
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        // opacity: isInView ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <div className="w-full flex gap-[8px] md:gap-[20px] md:justify-between ">
        <div className="flex flex-col w-full gap-[10px]">
          <h1 className="flex justify-center items-center bg-cover  md:text-[58px] bg-no-repeat bg-center w-[100%] text-[32px] aspect-square rounded-lg bg-[url('/images/coffe.webp')]">
            café
          </h1>
          <div className="w-full bg-[#27272a] flex flex-col gap-[4px] rounded-lg p-[12px]">
            <h1 className="text-[18px] font-[600]">Кофе</h1>
            <p className="text-[12px] font-[400] opacity-100">
              Делаем все, чтобы ваш день был лучше!
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-[10px]">
          <h1 className="flex justify-center items-center bg-cover  md:text-[58px] bg-no-repeat bg-center object-fill w-full text-[32px] aspect-square rounded-lg bg-[url('/images/cruasan.webp')]">
            croissant
          </h1>
          <div className="w-full bg-[#27272a] flex flex-col gap-[4px] rounded-lg  p-[12px]">
            <h1 className="text-[18px] font-[600]">Круассаны</h1>
            <p className="text-[12px] font-[400] opacity-100">
              Делаем все, чтобы ваш день был лучше!
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex w-full  md:justify-between gap-[8px] md:gap-[20px]"
      >
        <div className="flex flex-col w-full gap-[10px]">
          <h1 className="flex justify-center items-center bg-cover  md:text-[58px] bg-no-repeat bg-center w-[100%] text-[32px] aspect-square rounded-lg bg-[url('/images/lunch.webp')]">
            nourriture
          </h1>
          <div className="w-full bg-[#27272a] flex flex-col gap-[4px] rounded-lg  p-[12px]">
            <h1 className="text-[18px] font-[600]">Завтраки</h1>
            <p className="text-[12px] font-[400] opacity-100">
              Делаем все, чтобы ваш день был лучше!
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-[10px]">
          <h1 className="flex justify-center items-center bg-cover  md:text-[58px] bg-no-repeat bg-center w-[100%] text-[32px] aspect-square rounded-lg bg-[url('/images/boison.webp')]">
            boisson
          </h1>
          <div className="w-full bg-[#27272a] flex flex-col gap-[4px] rounded-lg  p-[12px]">
            <h1 className="text-[18px] font-[600]">Напитки</h1>
            <p className="text-[12px] font-[400] opacity-100">
              Делаем все, чтобы ваш день был лучше!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}