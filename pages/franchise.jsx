import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TextInput from "../components/CustomInputs/TextInput";
import TextAreaInput from "../components/CustomInputs/TextAreaInput";
import Head from "next/head";
import { useRef } from "react";

export default function Coop() {
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
 const plansRef = useRef(null);
 const reasonRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      lastname: lastNameRef.current.value,
      plans: plansRef.current.value,
      reason: reasonRef.current.value,
    };
    event.target.reset();
    //  buttonRef.innerHTML = "Отправлено!";
    sendToTelegram(data);
  };
  const sendToTelegram = (data) => {
    const BOT_TOKEN = "5714870203:AAFuSUOXmFSC396MWCa68bf8DR5oUtixRuQ";
    const CHAT_ID = "-1001941741315";
    let message = `📃💼 #франшиза

Имя - ${data.name}

Фамилия - ${data.lastname}

Телефон - ${data.phone}

📧 Расскажите нам о вашем опыте в Франчайзинге

➖➖➖➖➖➖➖

${data.plans}

➖➖➖➖➖➖➖

📧 Почему вы хотите работать с БлэкБерри?

➖➖➖➖➖➖➖

${data.reason}

➖➖➖➖➖➖➖
`;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `chat_id=${CHAT_ID}&text=${message}&parse_mode=html`,
    });
  };
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="BlackБери: Сеть кофеен"
        />

        <meta name="Author" content="BlackБери: Сеть кофеен" />
        <meta name="referrer" content="always" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <title>Подача заявки на открытие франшизы</title>

        <meta property="og:locale" content="ru_KZ" />
        <meta property="og:title" content="BlackБери: Сеть кофеен" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BlackБери: Сеть кофеен" />

        <meta
          property="og:description"
          content="кофе • выпечка • завтраки • ежедневно 8:00 — 22:00"
        />

        <meta
          name="description"
          content="кофе • выпечка • завтраки • ежедневно 8:00 — 22:00"
        />
        <meta
          name="keywords"
          content="кофе, выпечка, завтраки, ежедневнё, 8:00 — 22:00"
        />
      </Head>
      <div className="w-full">
        <h1 className="text-[24px] sm:text-[60px] text-center">
          Подача заявки на открытие франшизы
        </h1>
        <p className="text-[16px] opacity-50 text-center">
          Интересен Франча́йзинг?
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[48px] w-full items-center"
      >
        <div className="flex gap-[10px] flex-col sm:flex-row w-full">
          <TextInput ref={nameRef} label="Имя" ph="Ваше имя" />
          <TextInput ref={lastNameRef} label="Фамилия" ph="Ваша фамилия" />
          <TextInput ref={phoneRef} label="Телефон" ph="+7" />
        </div>
        <TextAreaInput
          ref={plansRef}
          ph="Ваши кейсы, опыт."
          label="Расскажите нам о вашем опыте в Франчайзинге"
        />
        <TextAreaInput
          ref={reasonRef}
          ph="Потому что..."
          label="Почему вы хотите работать с БлэкБерри?"
        />
        <button
          className="text-black text-[16px] w-[100%] sm:w-[50%] h-[40px] bg-white flex justify-center items-center rounded-lg font-[500]"
          type="submit"
        >
          Отправить
        </button>
      </form>

      <Footer />
    </Container>
  );
}
