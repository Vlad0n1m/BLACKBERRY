export default function HeaderNav() {
  return (
    <div className="flex flex-col md:flex-row gap-[8px] sm:gap-[20px] md:gap-[8px]">
      <div className="flex gap-[8px] sm:justify-between w-full">
        <a
          id="radial"
          className="hover:translate-y-[-10px] duration-500 w-full flex cursor-pointer flex-col items-start gap-[10px] py-[18px] px-[12px] sm:py-[30px] sm:px-[24px] text-white rounded-lg"
        >
          <div className="flex justify-between w-full items-center  gap-[12px]">
            <h1 className="text-[18px] sm:text-[34px] leading-[13.2px] sm:leading-[17.6px]">
              Любовь
            </h1>
            <svg
              className="self-end"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5457 1C14.6243 1.05633 13.7296 1.34287 12.9381 1.83519C12.156 2.32163 11.4975 2.99471 11.0173 3.79819C11.0096 3.81118 11.0057 3.81767 11 3.81767C10.9943 3.81767 10.9904 3.81118 10.9827 3.79819C10.5025 2.99471 9.84398 2.32163 9.0619 1.83519C8.27037 1.34287 7.37573 1.05633 6.45429 1C5.00772 1 3.6204 1.59576 2.59752 2.65622C1.57465 3.71669 1 5.15498 1 6.6547C1 12.0547 11 19 11 19C11 19 21 12.1272 21 6.6547C21 5.15498 20.4254 3.71669 19.4025 2.65622C18.3796 1.59576 16.9923 1 15.5457 1Z"
                fill="white"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="text-[12px] sm:text-[16px] leading-[22px] sm:leading-[25px]">
            Делаем все, чтобы ваш день был лучше!
          </p>
        </a>
        <a
          id="radial"
          className="hover:translate-y-[-10px] duration-500 md:w-full flex cursor-pointer flex-col items-start gap-[10px] py-[18px] px-[12px] sm:py-[30px] sm:px-[24px] text-white rounded-lg"
        >
          <div className="flex justify-between w-full items-center  gap-[12px]">
            <h1 className="text-[18px] sm:text-[34px] leading-[13.2px] sm:leading-[17.6px]">
              Еда
            </h1>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.12529 19C3.33929 18.2307 1.33337 17.5 1.76746 14.0769C2.16821 10.9167 2.11721 10.0615 1.76746 8.69231C1.34121 7.02364 4.9113 11 6.48321 11.7692C7.26916 12.1538 5.69729 8.69231 7.2692 6.38461C8.84111 4.07692 8.05515 3.77702 8.05515 1C9.36508 1.25641 13.0853 2.53846 11.199 8.69231C8.84111 16.3846 12.4681 6.29004 15.9147 5.61538C19.8445 4.84615 14.535 8.16033 16.7006 13.3077C17.8334 16 15.8334 18.5 14.8334 19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="text-[12px] sm:text-[16px] leading-[22px] sm:leading-[25px]">
            приготовленная лучшими мастерами
          </p>
        </a>
      </div>
      <div className="flex gap-[8px]  sm:justify-between w-full">
        <a
          id="radial"
          className="hover:translate-y-[-10px] duration-500 md:w-full flex cursor-pointer flex-col items-start gap-[10px] py-[18px] px-[12px] sm:py-[30px] sm:px-[24px] text-white rounded-lg"
        >
          <div className="flex justify-between w-full items-center  gap-[12px]">
            <h1 className="text-[18px] sm:text-[34px] leading-[13.2px] sm:leading-[17.6px]">
              Локации
            </h1>
            <svg
              width="15"
              height="22"
              viewBox="0 0 15 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6667 6.95304C13.6667 8.30015 13.3619 9.62979 12.7752 10.8424L10.6693 15.1944C9.63983 17.3221 9.12508 18.3859 8.39375 18.6713C7.92621 18.8537 7.40716 18.8537 6.93962 18.6713C6.2083 18.3859 5.69354 17.3221 4.66403 15.1944L2.55822 10.8424C1.97147 9.6298 1.66669 8.30015 1.66669 6.95304V6.95304C1.66669 3.66527 4.37891 1 7.66669 1V1C10.9545 1 13.6667 3.66527 13.6667 6.95304V6.95304Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M9.66669 7C9.66669 8.10457 8.77126 9 7.66669 9C6.56212 9 5.66669 8.10457 5.66669 7C5.66669 5.89543 6.56212 5 7.66669 5C8.77126 5 9.66669 5.89543 9.66669 7Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-[12px] sm:text-[16px] leading-[22px] sm:leading-[25px]">
            в том месте, где удобно!
          </p>
        </a>
        <a
          id="radial"
          className="hover:translate-y-[-10px] duration-500 w-full flex cursor-pointer flex-col items-start gap-[10px] py-[18px] px-[12px] sm:py-[30px] sm:px-[24px] text-white rounded-lg"
        >
          <div className="flex justify-between w-full items-center  gap-[12px]">
            <h1 className="text-[18px] sm:text-[34px] leading-[13.2px] sm:leading-[17.6px]">
              Кофе
            </h1>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_618_1521)">
                <path
                  d="M3 12.4286C3 12.0296 3 11.8301 3.05612 11.6697C3.15663 11.3825 3.38247 11.1566 3.66972 11.0561C3.83009 11 4.02959 11 4.42857 11H14.5714C14.9704 11 15.1699 11 15.3303 11.0561C15.6175 11.1566 15.8434 11.3825 15.9439 11.6697C16 11.8301 16 12.0296 16 12.4286V14.5C16 14.9643 16 15.1964 15.9872 15.3924C15.7902 18.397 13.397 20.7902 10.3924 20.9872C10.1964 21 9.96428 21 9.5 21C9.03572 21 8.80358 21 8.60758 20.9872C5.60304 20.7902 3.20977 18.397 3.01285 15.3924C3 15.1964 3 14.9643 3 14.5V12.4286Z"
                  fill="white"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 11L17.2222 11C18.7563 11 20 12.2508 20 13.9077C20 15.5646 18.7563 17 17.2222 17H16.1111"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M6.1875 3L6.08156 3.21189C5.82829 3.71841 5.70166 3.97167 5.71839 4.24029C5.73511 4.50892 5.89218 4.74452 6.20631 5.21572L6.26991 5.31112C6.53636 5.71079 6.66959 5.91063 6.70031 6.14002C6.73103 6.36942 6.65508 6.59727 6.50318 7.05297L6.1875 8"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M14.3125 3L14.2066 3.21189C13.9533 3.71841 13.8267 3.97167 13.8434 4.24029C13.8601 4.50892 14.0172 4.74452 14.3313 5.21572L14.3949 5.31112C14.6614 5.71079 14.7946 5.91063 14.8253 6.14002C14.856 6.36942 14.7801 6.59727 14.6282 7.05297L14.3125 8"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_618_1521">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-[12px] sm:text-[16px] leading-[22px] sm:leading-[25px]">
            который придает вкус каждому мнгновению
          </p>
        </a>
      </div>
    </div>
  );
}
