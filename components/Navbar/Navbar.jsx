import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { useRef } from "react";
import Modal from "@mui/material/Modal";
import { Link as LinkScroll } from "react-scroll";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const variants = {
    open: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
    closed: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
  };
  // document.body.classList.add("home-layout");
  // return () => {
  //   document.body.classList.remove("home-layout");
  // };
  const [open, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    };
    console.log(event.target);
    event.target.reset();
    event.target[2].innerHTML = "Отправлено!";
    sendToTelegram(data);
  };
  const sendToTelegram = (data) => {
    const BOT_TOKEN = "5714870203:AAFuSUOXmFSC396MWCa68bf8DR5oUtixRuQ";
    const CHAT_ID = "-1001941741315";
    let message = `#перезвонить\n\n🥷 - ${data.name}\n\n☎️ - ${data.phone}`;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `chat_id=${CHAT_ID}&text=${message}&parse_mode=html`,
    });
  };
  const ref = useRef(null);
  return (
    <div className="w-[100%] z-10 text-white flex flex-col items-center bg-[#121212] fixed">
      <div className="w-[100%] max-w-[383px] sm:max-w-[947px] md:max-w-[1361px] flex flex-col gap-[60px] sm:gap-[120px] md:gap-[200px]  py-1 z-40 ">
        <div className="flex items-center justify-between w-full bg-[#121212] px-[20px] lg:p-0 z-40">
          <Link
            href="/"
            className="font-[500] text-white text-[28px] sm:text-[40px]   leading-[45px]"
            onClick={() => setOpen(false)}
          >
            BLACKБЕРИ
          </Link>
          <motion.a
             
            onClick={handleOpen}
            className="hidden cursor-pointer hover:bg-black hover:border-white hover:border-[2px] hover:text-white text-black text-[16px] w-[180px] h-[40px] bg-white sm:flex justify-center items-center rounded-lg font-[500]"
          >
            Обратная связь
          </motion.a>
          <div class="sm:hidden space-y-2" onClick={() => setOpen(!isOpen)}>
            <Hamburger size={28} toggled={isOpen} />
          </div>
        </div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}

            className="absolute bg-[#121212] top-0 left-0 h-screen w-screen z-10"
          
        ></motion.div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className={`w-full max-w-[383px] h-screen absolute top-[68px] flex bg-[#121212] sm:hidden flex-col gap-[20px] items-start justify-start p-[10px] pt-11 z-40`}
        >
          <div className="flex flex-col gap-[14px] w-full">
            <LinkScroll
              onClick={() => setOpen(false)}
              smooth={true}
              offset={-75}
              duration={500}
              to="locations"
            >
              <h1 className="text-[20px]">Наши адреса</h1>
              <p className="opacity-50 text-[16px]">12 ресторанов</p>
            </LinkScroll>
            <a href="tel:87478311255">
              <h1 className="text-[20px]">8 (747) 831 12 55</h1>
              <p className="opacity-50 text-[16px]">Номер телефона</p>
            </a>
            <a href="mailto:info@blackberry.kz">
              <h1 className="text-[20px]">info@blackberry.kz</h1>
              <p className="opacity-50 text-[16px]">Почта</p>
            </a>
            <div className="w-full h-[1px] bg-white opacity-30" />
            <Link
              href="/policy"
              onClick={() => setOpen(false)}
              className="text-[20px]"
            >
              Политика конфиденциальности
            </Link>
            <div className="w-full h-[1px] bg-white opacity-30" />
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <div className="flex gap-[15px] items-center">
              <a
                href="https://t.me/bb_coffee"
                className=" opacity-10 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <g clip-path="url(#clip0_483_1896)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22ZM22.7884 16.2414C20.6486 17.1314 16.3719 18.9735 9.95847 21.7678C8.91703 22.1819 8.37147 22.5871 8.32181 22.9832C8.23787 23.6527 9.0763 23.9164 10.218 24.2754C10.3733 24.3242 10.5342 24.3748 10.6992 24.4284C11.8225 24.7936 13.3335 25.2208 14.119 25.2377C14.8316 25.2531 15.6268 24.9594 16.5048 24.3565C22.4971 20.3115 25.5904 18.267 25.7846 18.2229C25.9216 18.1918 26.1114 18.1527 26.2401 18.267C26.3687 18.3814 26.3561 18.5979 26.3424 18.656C26.2594 19.0101 22.9682 22.0698 21.2651 23.6533C20.7341 24.1469 20.3575 24.497 20.2805 24.577C20.108 24.7561 19.9322 24.9256 19.7633 25.0884C18.7197 26.0944 17.9372 26.8488 19.8066 28.0808C20.705 28.6728 21.4239 29.1623 22.1411 29.6507C22.9243 30.1841 23.7055 30.7161 24.7163 31.3787C24.9738 31.5475 25.2197 31.7229 25.4593 31.8936C26.3708 32.5434 27.1897 33.1273 28.2014 33.0342C28.7893 32.9801 29.3965 32.4273 29.7049 30.7786C30.4337 26.8824 31.8663 18.4405 32.1974 14.9618C32.2264 14.657 32.1899 14.2669 32.1606 14.0957C32.1313 13.9245 32.0701 13.6805 31.8475 13.4999C31.5839 13.2861 31.177 13.2409 30.995 13.2442C30.1675 13.2587 28.898 13.7002 22.7884 16.2414Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_483_1896">
                      <rect width="44" height="44" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bb_petropavl/"
                className=" opacity-10 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <rect width="44" height="44" rx="22" fill="#ECECEC" />
                  <g clip-path="url(#clip0_483_1897)">
                    <path
                      d="M22 13.8008C24.6719 13.8008 24.9883 13.8125 26.0391 13.8594C27.0156 13.9023 27.543 14.0664 27.8945 14.2031C28.3594 14.3828 28.6953 14.6016 29.043 14.9492C29.3945 15.3008 29.6094 15.6328 29.7891 16.0977C29.9258 16.4492 30.0898 16.9805 30.1328 17.9531C30.1797 19.0078 30.1914 19.3242 30.1914 21.9922C30.1914 24.6641 30.1797 24.9805 30.1328 26.0313C30.0898 27.0078 29.9258 27.5352 29.7891 27.8867C29.6094 28.3516 29.3906 28.6875 29.043 29.0352C28.6914 29.3867 28.3594 29.6016 27.8945 29.7813C27.543 29.918 27.0117 30.082 26.0391 30.125C24.9844 30.1719 24.668 30.1836 22 30.1836C19.3281 30.1836 19.0117 30.1719 17.9609 30.125C16.9844 30.082 16.457 29.918 16.1055 29.7813C15.6406 29.6016 15.3047 29.3828 14.957 29.0352C14.6055 28.6836 14.3906 28.3516 14.2109 27.8867C14.0742 27.5352 13.9102 27.0039 13.8672 26.0313C13.8203 24.9766 13.8086 24.6602 13.8086 21.9922C13.8086 19.3203 13.8203 19.0039 13.8672 17.9531C13.9102 16.9766 14.0742 16.4492 14.2109 16.0977C14.3906 15.6328 14.6094 15.2969 14.957 14.9492C15.3086 14.5977 15.6406 14.3828 16.1055 14.2031C16.457 14.0664 16.9883 13.9023 17.9609 13.8594C19.0117 13.8125 19.3281 13.8008 22 13.8008ZM22 12C19.2852 12 18.9453 12.0117 17.8789 12.0586C16.8164 12.1055 16.0859 12.2773 15.4531 12.5234C14.793 12.7812 14.2344 13.1211 13.6797 13.6797C13.1211 14.2344 12.7813 14.793 12.5234 15.4492C12.2773 16.0859 12.1055 16.8125 12.0586 17.875C12.0117 18.9453 12 19.2852 12 22C12 24.7148 12.0117 25.0547 12.0586 26.1211C12.1055 27.1836 12.2773 27.9141 12.5234 28.5469C12.7813 29.207 13.1211 29.7656 13.6797 30.3203C14.2344 30.875 14.793 31.2188 15.4492 31.4727C16.0859 31.7188 16.8125 31.8906 17.875 31.9375C18.9414 31.9844 19.2813 31.9961 21.9961 31.9961C24.7109 31.9961 25.0508 31.9844 26.1172 31.9375C27.1797 31.8906 27.9102 31.7188 28.543 31.4727C29.1992 31.2188 29.7578 30.875 30.3125 30.3203C30.8672 29.7656 31.2109 29.207 31.4648 28.5508C31.7109 27.9141 31.8828 27.1875 31.9297 26.125C31.9766 25.0586 31.9883 24.7188 31.9883 22.0039C31.9883 19.2891 31.9766 18.9492 31.9297 17.8828C31.8828 16.8203 31.7109 16.0898 31.4648 15.457C31.2188 14.793 30.8789 14.2344 30.3203 13.6797C29.7656 13.125 29.207 12.7813 28.5508 12.5273C27.9141 12.2812 27.1875 12.1094 26.125 12.0625C25.0547 12.0117 24.7148 12 22 12Z"
                      fill="#121212"
                    />
                    <path
                      d="M22 16.8633C19.1641 16.8633 16.8633 19.1641 16.8633 22C16.8633 24.8359 19.1641 27.1367 22 27.1367C24.8359 27.1367 27.1367 24.8359 27.1367 22C27.1367 19.1641 24.8359 16.8633 22 16.8633ZM22 25.332C20.1602 25.332 18.668 23.8398 18.668 22C18.668 20.1602 20.1602 18.668 22 18.668C23.8398 18.668 25.332 20.1602 25.332 22C25.332 23.8398 23.8398 25.332 22 25.332Z"
                      fill="#121212"
                    />
                    <path
                      d="M28.5391 16.6601C28.5391 17.3242 28 17.8593 27.3398 17.8593C26.6758 17.8593 26.1406 17.3203 26.1406 16.6601C26.1406 15.9961 26.6797 15.4609 27.3398 15.4609C28 15.4609 28.5391 16 28.5391 16.6601Z"
                      fill="#121212"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_483_1897">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(12 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="/" className=" opacity-10 hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <rect width="44" height="44" rx="22" fill="#ECECEC" />
                  <path
                    d="M31.8008 17.8C31.8008 17.8 31.6055 16.3522 31.0039 15.7164C30.2422 14.8797 29.3906 14.8756 29 14.8264C26.2031 14.6131 22.0039 14.6131 22.0039 14.6131H21.9961C21.9961 14.6131 17.7969 14.6131 15 14.8264C14.6094 14.8756 13.7578 14.8797 12.9961 15.7164C12.3945 16.3522 12.2031 17.8 12.2031 17.8C12.2031 17.8 12 19.5022 12 21.2002V22.7916C12 24.4897 12.1992 26.1918 12.1992 26.1918C12.1992 26.1918 12.3945 27.6397 12.9922 28.2754C13.7539 29.1122 14.7539 29.0834 15.1992 29.1737C16.8008 29.3336 22 29.3829 22 29.3829C22 29.3829 26.2031 29.3747 29 29.1655C29.3906 29.1163 30.2422 29.1122 31.0039 28.2754C31.6055 27.6397 31.8008 26.1918 31.8008 26.1918C31.8008 26.1918 32 24.4938 32 22.7916V21.2002C32 19.5022 31.8008 17.8 31.8008 17.8ZM19.9336 24.7235V18.8213L25.3359 21.7827L19.9336 24.7235Z"
                    fill="#121212"
                  />
                </svg>
              </a>
              <a href="/" className=" opacity-10 hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <rect width="44" height="44" rx="22" fill="#ECECEC" />
                  <path
                    d="M26.2272 12H22.8566V25.6232C22.8566 27.2464 21.5602 28.5797 19.947 28.5797C18.3337 28.5797 17.0373 27.2464 17.0373 25.6232C17.0373 24.029 18.3049 22.7246 19.8606 22.6667V19.2464C16.4323 19.3043 13.6667 22.1159 13.6667 25.6232C13.6667 29.1594 16.49 32 19.9758 32C23.4616 32 26.2848 29.1304 26.2848 25.6232V18.6377C27.5524 19.5652 29.108 20.1159 30.7501 20.1449V16.7246C28.215 16.6377 26.2272 14.5507 26.2272 12Z"
                    fill="#121212"
                  />
                </svg>
              </a>
            </div>
            <motion.a
              whileTap={{
                scale: 0.9,
              }}
              onClick={handleOpen}
              className="flex w-full justify-center items-center text-black bg-white rounded-lg font-[500] py-[14px] uppercase mt-[12px]"
            >
              Форма для обратной связи
            </motion.a>
          </div>
        </motion.div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            id="modal"
            ref={ref}
            className="absolute w-[80%] sm:w-[unset] rounded-lg flex flex-col bg-[#27272a] gap-[18px] text-white p-[18px]"
          >
            <div className="flex gap-[30px] justify-between items-center md:justify-center">
              <h1 className="text-[23px] sm:text-[32px] font-[500] text-center">
                Есть предложения или вопросы?
              </h1>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden"
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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-[20px]"
            >
              <div className="flex flex-col items-center gap-[20px] w-full">
                <input
                  ref={nameRef}
                  type="text"
                  className="w-full py-[12px] px-[16px] text-black bg-[#E9E9E9] text-[12px] rounded-lg"
                  placeholder="Имя"
                  name="name"
                  required
                />
                <input
                  ref={phoneRef}
                  type="phone"
                  className="w-full  py-[12px] px-[16px] text-black bg-[#E9E9E9] text-[12px] rounded-lg"
                  placeholder="Телефон"
                  name="phone"
                  required
                />
                <motion.button
                  whileTap={{
                    scale: 0.9,
                  }}
                  type="submit"
                  className=" flex text-black text-[16px] w-full h-[40px] bg-white justify-center items-center rounded-lg font-[500]"
                >
                  Позвоните мне
                </motion.button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}
