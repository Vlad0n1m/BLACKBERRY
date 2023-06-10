import Image from "next/image";

export default function LocationBlock() {
    return (
      <div className="flex flex-col gap-[30px] text-white items-center">
        <div className="flex gap-[4px] items-center justify-center">
          <svg
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
          <h1 className="text-[32px] font-[500]">Локации</h1>
        </div>
        <p className="text-[14px] font-[400]">
          Постоянно открываем новые горизонты
        </p>
        <div className="flex justify-center gap-[10px] w-[80%] ">
          <p className="uppercase flex font-[500] bg-white text-black rounded-full py-[15px] px-[20px] leading-[0px] justify-center items-center">
            Петропавл
          </p>
          <p className="uppercase flex font-[500] border-2 border-white bg-black rounded-full leading-[0px] py-[15px] px-[20px] justify-center items-center">
            Кокшетау
          </p>
        </div>
        <Image src="/images/location.webp" width="500" height="500" className="rounded-lg"/>
      </div>
    );
}
