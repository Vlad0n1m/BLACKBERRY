import Link from "next/link";
export default function Activivties() {
  return (
    <div className="flex flex-col gap-[20px] text-white ">
      <h1 className="w-full text-center  text-[24px] sm:text-[48px] md:text-[54px] font-[500]">
        Что будем делать вместе?
      </h1>
      <div className="flex items-center justify-between gap-[10px]">
        <h1
          id="shadow-down-brown text-shadow"
          className="cursor-pointer flex grow-[1] sm:grow-[2] justify-start text-[16px] sm:text-[33px] w-[90px] sm:w-[unset] md:text-[50px] font-[600] leading-[100%] items-end bg-[url('/images/franshisa.webp')] h-full  rounded-lg  max-h-[90px] sm:max-h-[300px] aspect-square sm:aspect-[unset] sm:min-h-[300px] bg-center bg-cover p-[5px] sm:p-[12px]"
        >
          наша <br />
          франшиза
        </h1>
        <h1
          id="shadow-down-green text-shadow"
          className="cursor-pointer flex grow-[1] justify-start text-[16px] sm:text-[33px] md:text-[50px] w-[90px] sm:w-[unset] leading-[100%] font-[600] items-end bg-[url('/images/collab.webp')] h-full  rounded-lg max-h-[90px] sm:max-h-[300px] aspect-square sm:aspect-[unset] sm:min-h-[300px] bg-center bg-cover p-[5px] sm:p-[12px]"
        >
          со
          <br />
          труд
          <br />
          ничество
        </h1>
        <Link
        href="/resume"
          id="shadow-down-white text-shadow"
          className="cursor-pointer flex grow-[1] justify-start text-[16px] sm:text-[33px] md:text-[50px] w-[90px] sm:w-[unset] font-[600] leading-[100%]  items-end bg-[url('/images/job.webp')] h-full  rounded-lg  max-h-[90px] sm:max-h-[300px] aspect-square sm:aspect-[unset] sm:min-h-[300px] bg-center bg-cover p-[5px] sm:p-[12px]"
        >
          мы
          <br />
          ищем
          <br />
          тебя
        </Link>
      </div>
    </div>
  );
}
