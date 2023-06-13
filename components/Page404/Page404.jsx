import Link from "next/link";
export default function Page404() {
  return (
    <div className="flex-col flex gap-[19px] justify-center items-center text-white my-7 sm:my-0">
      <h1 className="text-[140px] md:text-[230px] leading-[180px] md:leading-[293px] font-[700] italic">
        404
      </h1>
      <h2 className="text-[22px] md:text-[60px] font-[400] leading-[72px] text-center">
        Такой страницы у нас нет
      </h2>
      <p className="opacity-50 font-[400] text-[16px]">
        Вернемся в безопастное место?
      </p>
      <Link
        className="text-black text-[16px] w-[300px] h-[40px] bg-white flex justify-center items-center rounded-lg font-[500]"
        href="/"
      >
        Вернуться
      </Link>
    </div>
  );
}
