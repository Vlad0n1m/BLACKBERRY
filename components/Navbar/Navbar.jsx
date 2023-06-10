export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-[500] text-white text-[28px] md:text-[40px] leading-[45px]">
        BLACKБЕРИ
      </h1>
      <a
        className="hidden text-black text-[16px] w-[180px] h-[40px] bg-white sm:flex justify-center items-center rounded-lg font-[500]"
        href="/"
      >
        Обратная связь
      </a>
      <div class="sm:hidden space-y-2">
        <div class="w-8 h-0.5 bg-white"></div>
        <div class="w-7  h-0.5 bg-white"></div>
        <div class="w-8 h-0.5 bg-white"></div>
      </div>
    </div>
  );
}
