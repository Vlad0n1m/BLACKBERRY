export default function Form() {
  return (
    <div className=" rounded-lg flex flex-col bg-[#27272a] gap-[42px] text-white p-[18px]">
      <div className="flex gap-[30px] justify-between items-center">
        <h1 className="text-[19px] sm:text-[32px] font-[500]">
          Есть предложения или вопросы?
        </h1>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_483_2583)">
            <path
              d="M22.3139 10.672L20.8989 12.086L20.1919 11.379L15.9499 15.621L15.2429 19.157L13.8279 20.571L9.58592 16.328L4.63592 21.278L3.22192 19.864L8.17192 14.914L3.92892 10.672L5.34292 9.25704L8.87992 8.55004L13.1219 4.30804L12.4149 3.60104L13.8289 2.18604L22.3139 10.672Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_483_2583">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-[12px]">
        <div className="flex flex-col sm:flex-row  gap-[8px] w-full">
          <input
            type="text"
            className="w-full sm:w-[40%] py-[12px] px-[16px] text-black bg-[#E9E9E9] text-[12px] rounded-lg"
            placeholder="Имя"
          />
          <input
            type="phone"
            className="w-full sm:w-[40%] py-[12px] px-[16px] text-black bg-[#E9E9E9] text-[12px] rounded-lg"
            placeholder="Телефон"
          />
        </div>
        <button
          className=" flex text-black text-[16px] w-[100%] sm:w-[30%] h-[40px] bg-white justify-center items-center rounded-lg font-[500]"
          href="/"
        >
          Позвоните мне
        </button>
      </div>
    </div>
  );
}
