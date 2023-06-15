import { motion } from "framer-motion";
export default function HeaderNav() {
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      className="flex-col  sm:flex-row flex gap-[8px] sm:gap-[21px] text-white"
    >
      <div className="flex  w-full gap-[10px] md:gap-[21px]">
        <div className="flex items-start flex-col gap-[10px] w-fullgap-[10px] w-full  p-[12px] bg-[transparent] hover:bg-[#27272a] rounded-[10px]">
          <svg
            className="sm:w-[20px] sm:h-[20px]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_462_2219)">
              <path
                d="M16.5457 3C15.6243 3.05633 14.7296 3.34287 13.9381 3.83519C13.156 4.32163 12.4975 4.99471 12.0173 5.79819C12.0096 5.81118 12.0057 5.81767 12 5.81767C11.9943 5.81767 11.9904 5.81118 11.9827 5.79819C11.5025 4.99471 10.844 4.32163 10.0619 3.83519C9.27037 3.34287 8.37573 3.05633 7.45429 3C6.00772 3 4.6204 3.59576 3.59752 4.65622C2.57465 5.71669 2 7.15498 2 8.6547C2 14.0547 12 21 12 21C12 21 22 14.1272 22 8.6547C22 7.15498 21.4254 5.71669 20.4025 4.65622C19.3796 3.59576 17.9923 3 16.5457 3Z"
                fill="white"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_462_2219">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-[18px] font-[600] sm:text-[34px]">Любовь</h1>
          <p className="text-[12px] sm:text-[16px]">
            Делаем все, чтобы ваш день был лучше!
          </p>
        </div>

        <div className="flex items-start flex-col gap-[10px] w-fullgap-[10px]  w-full  p-[12px] bg-[transparent] hover:bg-[#27272a] rounded-[10px]">
          <svg
            className="sm:w-[20px] sm:h-[20px]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_462_2223)">
              <path
                d="M6.79191 21C6.00591 20.2308 4 19.5 4.43409 16.077C4.83484 12.9167 4.78383 12.0615 4.43409 10.6923C4.00783 9.02367 7.57792 13 9.14983 13.7693C9.93579 14.1539 8.36392 10.6923 9.93582 8.38465C11.5077 6.07695 10.7218 5.77705 10.7218 3.00003C12.0317 3.25644 15.7519 4.53849 13.8656 10.6923C11.5077 18.3846 15.1347 8.29008 18.5813 7.61542C22.5111 6.84618 17.2016 10.1604 19.3673 15.3077C20.5 18 18.5 20.5 17.5 21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_462_2223">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1 className="text-[18px] font-[600] sm:text-[34px]">Еда</h1>
          <p className="text-[12px] sm:text-[16px]">
            приготовленная лучшими мастерами
          </p>
        </div>
      </div>
      <div className="flex w-full gap-[10px] md:gap-[21px]">
        <div className="flex items-start flex-col gap-[10px] w-full  p-[12px] bg-[transparent] hover:bg-[#27272a] rounded-[10px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_462_2227)">
              <path
                d="M18 8.95304C18 10.3001 17.6952 11.6298 17.1085 12.8424L15.0027 17.1944C13.9731 19.3221 13.4584 20.3859 12.7271 20.6713C12.2595 20.8537 11.7405 20.8537 11.2729 20.6713C10.5416 20.3859 10.0269 19.3221 8.99734 17.1944L6.89153 12.8424C6.30479 11.6298 6 10.3001 6 8.95304V8.95304C6 5.66527 8.71223 3 12 3V3C15.2878 3 18 5.66527 18 8.95304V8.95304Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_462_2227">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1 className="text-[18px] font-[600] sm:text-[34px]">Локации</h1>
          <p className="text-[12px] sm:text-[16px]">в том месте, где удобно!</p>
        </div>

        <div className="flex items-start flex-col gap-[10px]  w-full  p-[12px] bg-[transparent] hover:bg-[#27272a] rounded-[10px]">
          <svg
            className="sm:w-[20px] sm:h-[20px]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_462_2231)">
              <path
                d="M3 12.4286C3 12.0296 3 11.8301 3.05612 11.6697C3.15663 11.3825 3.38247 11.1566 3.66972 11.0561C3.83009 11 4.02959 11 4.42857 11H14.5714C14.9704 11 15.1699 11 15.3303 11.0561C15.6175 11.1566 15.8434 11.3825 15.9439 11.6697C16 11.8301 16 12.0296 16 12.4286V14.5C16 14.9643 16 15.1964 15.9872 15.3924C15.7902 18.397 13.397 20.7902 10.3924 20.9872C10.1964 21 9.96428 21 9.5 21V21C9.03572 21 8.80358 21 8.60758 20.9872C5.60304 20.7902 3.20977 18.397 3.01285 15.3924C3 15.1964 3 14.9643 3 14.5V12.4286Z"
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
              <clipPath id="clip0_462_2231">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1 className="text-[18px] font-[600] sm:text-[34px]">Кофе</h1>
          <p className="text-[12px] sm:text-[16px]">
            который придает вкус каждому мнгновению
          </p>
        </div>
      </div>
    </motion.div>
  );
}
