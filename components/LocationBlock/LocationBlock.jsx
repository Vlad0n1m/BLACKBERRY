import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
export default function LocationBlock() {
  const [ActiveTab, SetActive] = useState(1);
  const TabClicked = (index) => {
    SetActive(index);
  };
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      className="flex flex-col gap-[20px] justify-center items-center"
    >
      <div className="w-full flex flex-col sm:flex-row gap-[16px] sm:justify-between text-white items-center">
        <div className="flex gap-[4px] items-center justify-center">
          <svg
            className="md:w-[46px] md:h-[46px]"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_462_2323)">
              <path
                d="M22.25 10.8183C22.25 12.446 21.8817 14.0527 21.1727 15.5179L18.6282 20.7766C17.3842 23.3475 16.7622 24.633 15.8785 24.9778C15.3136 25.1983 14.6864 25.1983 14.1215 24.9778C13.2378 24.633 12.6158 23.3475 11.3718 20.7766L8.82727 15.5179C8.11828 14.0527 7.75 12.446 7.75 10.8183V10.8183C7.75 6.84553 11.0273 3.625 15 3.625V3.625C18.9727 3.625 22.25 6.84553 22.25 10.8183V10.8183Z"
                stroke="white"
                stroke-width="2.41667"
              />
              <path
                d="M17.4166 10.875C17.4166 12.2097 16.3346 13.2917 14.9999 13.2917C13.6652 13.2917 12.5833 12.2097 12.5833 10.875C12.5833 9.54035 13.6652 8.45837 14.9999 8.45837C16.3346 8.45837 17.4166 9.54035 17.4166 10.875Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_462_2323">
                <rect
                  width="29"
                  height="29"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-[32px] font-[500] md:text-[54px]">Локации</h1>
        </div>

        <p className="text-[14px] font-[400] md:text-[22px]">
          Постоянно открываем новые горизонты
        </p>
        <div className="flex justify-center gap-[10px] ">
          <p
            onClick={() => TabClicked(1)}
            className={
              ActiveTab === 1
                ? "uppercase flex font-[500]  rounded-full py-[15px] px-[20px] leading-[0px] justify-center items-center  hover:bg-white hover:text-black cursor-pointer border-white border-2 bg-white text-black"
                : "uppercase flex font-[500]  rounded-full py-[15px] px-[20px] leading-[0px] justify-center items-center  hover:bg-white hover:text-black cursor-pointer border-white bg-black border-2"
            }
          >
            Петропавл
          </p>
          <p
            onClick={() => TabClicked(2)}
            className={
              ActiveTab === 2
                ? "uppercase flex font-[500]  rounded-full py-[15px] px-[20px] leading-[0px] justify-center items-center  hover:bg-white hover:text-black border-white border-2 cursor-pointer bg-white text-black"
                : "uppercase flex font-[500]  rounded-full py-[15px] px-[20px] leading-[0px] justify-center items-center  hover:bg-white hover:text-black cursor-pointer border-white border-2 bg-black"
            }
          >
            Кокшетау
          </p>
        </div>
      </div>
      <div className="w-full sm:max-h-[340px] flex flex-col sm:flex-row gap-[20px] justify-center items-center">
        <Image
          src="/images/location.webp"
          width="500"
          height="500"
          className="object-cover object-center rounded-lg w-full max-w-[970px] max-h-[300px]"
        />
        <div
          className={
            ActiveTab == 1
              ? "flex h-[100%] sm:w-[40%] flex-col p-[12px] gap-[12px] bg-[#27272a] items-start w-full rounded-lg"
              : "flex h-[100%] sm:w-[40%] flex-col-reverse p-[12px] gap-[12px] bg-[#27272a] items-start w-full rounded-lg"
          }
        >
          <p className="text-white md:text-[20px] font-400 text-[16px]">
            ул. Горького, 179
          </p>
          <p className="text-white md:text-[20px] font-400 text-[16px]">
            ул. Назарбаева, 116а
          </p>
          <p className="text-white md:text-[20px] font-400 text-[16px]">
            ул. Интернациональная, 43
          </p>
          <p className="text-white md:text-[20px] font-400 text-[16px]">
            ул. Интернациональная, 24
          </p>
          <p className="text-white md:text-[20px] font-400 text-[16px]">
            ул. Жумабаева, 91
          </p>
          <p className="text-white md:text-[20px] font-400 text-[16px]">
            ул. Сатпаева, 38
          </p>
          <p className="text-white md:text-[20px] font-400 text-[16px]">
            ул. Уалиханова, 56
          </p>
        </div>
      </div>
    </motion.div>
  );
}
