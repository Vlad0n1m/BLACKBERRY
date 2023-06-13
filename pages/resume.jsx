import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TextInput from "../components/CustomInputs/TextInput";
import TextAreaInput from "../components/CustomInputs/TextAreaInput";
import Link from "next/link";
import Head from "next/head";
import { useRef } from "react";

export default function Resume() {
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const ageRef = useRef(null);
  const isWorkingRef = useRef(null);
  const isEducatingRef = useRef(null);
  const letterRef = useRef(null);
  const expRef = useRef(null);
  const roleRef = useRef(null);
  const connectRef = useRef(null);
  const phoneRef = useRef(null);
  const nickRef = useRef(null);
  const task1Ref = useRef(null);
  const task2Ref = useRef(null);
  const otherRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      age: ageRef.current.value,
      letter: letterRef.current.value,
      isworking: isWorkingRef.current.value,
      iseducating: isEducatingRef.current.value,
      exp: expRef.current.value,
      role: roleRef.current.value,
      connect: connectRef.current.value,
      phone: phoneRef.current.value,
      nick: nickRef.current.value,
      task1: task1Ref.current.value,
      task2: task2Ref.current.value,
      other: otherRef.current.value,
    };
    event.target.reset();
    //  buttonRef.innerHTML = "Отправлено!";
    sendToTelegram(data);
  };
  const sendToTelegram = (data) => {
    const BOT_TOKEN = "5714870203:AAFuSUOXmFSC396MWCa68bf8DR5oUtixRuQ";
    const CHAT_ID = "-1001941741315";
    let message = `📃💼 #резюме

Имя - ${data.name}
Фамилия - ${data.lastName}

🔞 Возраст - ${data.age}
👩‍🏭 Работает? - ${data.isworking}
👨‍🏫 Учится? - ${data.iseducating}

📧 Сопроводительное письмо

➖➖➖➖➖➖➖

${data.letter}

➖➖➖➖➖➖➖

🟢 Опыт - ${data.exp}
🟢 Желаемая должность - ${data.role}
🟢 Способ связи - ${data.connect}

Задания:

1️⃣ Гость сказал, что капучино холодный. Твои действия? 

➖➖➖➖➖➖➖

${data.task1}

➖➖➖➖➖➖➖

2️⃣ Гость попросил добавить 8 ложек сахара. Твои действия?

➖➖➖➖➖➖➖

${data.task2}

➖➖➖➖➖➖➖

3️⃣ Выполнял(а) ли ты дополнительные обязанности на предыдущей работе? 

➖➖➖➖➖➖➖

${data.other}

➖➖➖➖➖➖➖`;

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

        <title>Подача заявки на работу </title>

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
      <Navbar />
      <div className="w-full">
        <h1 className="text-[24px] sm:text-[60px] text-center">Форма заявки</h1>
        <p className="text-[16px] opacity-50 text-center">
          Хотите работать с нами?
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[48px] w-full items-center"
      >
        <div className="flex gap-[10px] flex-col sm:flex-row w-full">
          <TextInput ref={nameRef} label="Имя" ph="Ваше имя" />
          <TextInput ref={lastNameRef} label="Фамилия" ph="Ваша фамилия" />
          <TextInput ref={ageRef} label="Возраст" ph="Ваш возраст" />
        </div>
        <div className="flex gap-[10px] flex-col sm:flex-row w-full">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="text-[14px] opacity-50">Работаешь ли ты сейчас?</p>
            <select
              ref={isWorkingRef}
              defaultValue="none"
              name="isWorking"
              id="isWorking"
              className="cursor-pointer w-full py-[12px] px-[18px] sm:px-[36px] text-[14px] sm:text-[18px] text-black placeholder:opacity-50 bg-white rounded-lg"
            >
              <option value="Да">Да</option>
              <option value="Нет">Нет</option>
              <option value="Не выбрано">Выберите</option>
            </select>
          </div>
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="text-[14px] opacity-50">Учишься?</p>
            <select
              ref={isEducatingRef}
              defaultValue="none"
              name="isEducating"
              id="isEducating"
              className="cursor-pointer w-full py-[12px] px-[18px] sm:px-[36px] text-[14px] sm:text-[18px] text-black placeholder:opacity-50 bg-white rounded-lg"
            >
              <option value="Заканчиваю">Заканчиваю</option>
              <option value="В процессе">В процессе</option>
              <option value="Начинаю">Начинаю</option>
              <option value="Не выбрано">Выберите</option>
            </select>
          </div>
        </div>
        <TextAreaInput
          ref={letterRef}
          ph="Расскажи о себе, о своем опыте в общепите если он есть, о желании работать баристой"
          label="Сопроводительное письмо"
        />
        <div className="flex gap-[10px] flex-col sm:flex-row w-full">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="text-[14px] opacity-50">Ваш опыт</p>
            <select
              ref={expRef}
              defaultValue="none"
              name="isworking"
              id="isworking"
              className="cursor-pointer w-full py-[12px] px-[18px] sm:px-[36px] text-[14px] sm:text-[18px] text-black placeholder:opacity-50 bg-white rounded-lg"
            >
              <option value="Нет">Нет</option>
              <option value="Больше месяца">Больше месяца</option>
              <option value="Больше полугода">Больше полугода</option>
              <option value="Больше года">Больше года</option>
              <option value="Не выбранно">Выберите</option>
            </select>
          </div>
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="text-[14px] opacity-50">Желаемая должность</p>
            <select
              ref={roleRef}
              defaultValue="none"
              name="isworking"
              id="isworking"
              className="cursor-pointer w-full py-[12px] px-[18px] sm:px-[36px] text-[14px] sm:text-[18px] text-black placeholder:opacity-50 bg-white rounded-lg"
            >
              <option value="Кофемейкер">Кофемейкер</option>
              <option value="Круасанмейкер">Круасанмейкер</option>
              <option value="Кассир">Кассир</option>
              <option value="Выберите">Выберите</option>
            </select>
          </div>
        </div>
        <div className="flex gap-[10px] flex-col sm:flex-row w-full">
          <div className="flex flex-col gap-[8px] items-start w-full">
            <p className="text-[14px] opacity-50">Способ связи</p>
            <select
              ref={connectRef}
              defaultValue="none"
              name="connect"
              id="connect"
              className="cursor-pointer w-full py-[12px] px-[18px] sm:px-[36px] text-[14px] sm:text-[18px] text-black placeholder:opacity-50 bg-white rounded-lg"
            >
              <option value="Телефон">Телефон</option>
              <option value="Telegram">Telegram</option>
              <option value="Не выбрано">Выберите</option>
            </select>
          </div>
          <TextInput ref={phoneRef} label="Номер телефона" ph="+7" />
          <TextInput ref={nickRef} label="Никнейм" ph="@" />
        </div>
        <div className="flex gap-[10px] flex-col sm:flex-row w-full">
          <TextAreaInput
            ref={task1Ref}
            ph="Напиши раскрытый ответ и обоснование."
            label="Гость сказал, что капучино холодный. Твои действия?"
          />
        </div>
        <div className="flex gap-[10px] flex-col sm:flex-row w-full">
          <TextAreaInput
            ref={task2Ref}
            ph="Напиши раскрытый ответ и обоснование."
            label="Гость попросил добавить 8 ложек сахара. Твои действия?"
          />
        </div>
        <div className="flex gap-[10px] flex-col sm:flex-row w-full">
          <TextAreaInput
            ref={otherRef}
            ph="Если да, то какие?"
            label="Выполнял(а) ли ты дополнительные обязанности на предыдущей работе?"
          />
        </div>
        <button
          ref={buttonRef}
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
