export default function Activivties() {
  return (
    <div className="flex flex-col gap-[20px] text-white ">
      <h1 className="w-full text-center  text-[24px] sm:text-[48px] md:text-[54px] font-[500]">Что будем делать вместе?</h1>
      <div className="flex items-center justify-between gap-[10px]">
        <h1
          id="shadow-down-brown"
          className="cursor-pointer flex grow-[2] justify-start text-[16px] sm:text-[33px] md:text-[61px] font-[700] leading-[100%] items-end bg-[url('/images/franshisa.webp')]  rounded-lg w-full max-h-[90px] sm:max-h-[300px] aspect-square bg-center bg-cover p-[5px] sm:p-[12px]"
        >
          наша <br />
          франшиза
        </h1>
        <h1
          id="shadow-down-green"
          className="cursor-pointer flex justify-start text-[16px] sm:text-[33px] md:text-[61px] leading-[100%] font-[700] items-end bg-[url('/images/collab.webp')] rounded-lg w-full max-h-[90px] sm:max-h-[300px] aspect-square bg-center bg-cover p-[5px] sm:p-[12px]"
        >
          со
          <br />
          труд
          <br />
          ничество
        </h1>
        <h1
          id="shadow-down-white"
          className="cursor-pointer flex justify-start text-[16px] sm:text-[33px] md:text-[61px] font-[700] leading-[100%]  items-end bg-[url('/images/job.webp')] rounded-lg w-full max-h-[90px] sm:max-h-[300px] aspect-square bg-center bg-cover p-[5px] sm:p-[12px]"
        >
          мы
          <br />
          ищем
          <br />
          тебя
        </h1>
      </div>
    </div>
  );
}
