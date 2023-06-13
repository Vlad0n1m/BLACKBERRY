import Text from "../components/Text/Text";
import Paragraph from "../components/Text/Paragraph";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";
import Head from "next/head";
export default function Policy() {
  return (
    <Container>
      <Head>
       <meta charSet="utf-8"/>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-title" content="BlackБери: Сеть кофеен"/>

      <title> Политика Конфиденциальности </title>
      <meta name="Author" content="BlackБери"/>
      <meta name="referrer" content="always"/>
      <meta name="googlebot" content="noindex" />
      </Head>
      <Navbar />
      <div className="flex items-center gap-[3%] text-white">
        <Link href="/">
          <svg
            width="12"
            height="22"
            viewBox="0 0 12 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20L2 11L10 2"
              stroke="white"
              stroke-width="2"
              stroke-linecap="square"
            />
          </svg>
        </Link>

        <h1 className="text-[29px] sm:hidden font-[500] sm:text-[30px] md:text-[60px]">
          ПОЛИТИКА КОНФ.
        </h1>
        <h1 className="text-[29px] hidden sm:block font-[500] sm:text-[30px] md:text-[60px]">
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </h1>
      </div>
      <Text>
        <Paragraph>1. Общие положения</Paragraph>
        <Paragraph>
          Настоящая политика обработки персональных данных составлена в
          соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ
          «О персональных данных» (далее - Закон о персональных данных) и
          определяет порядок обработки персональных данных и меры по обеспечению
          безопасности персональных данных, предпринимаемые (далее – Оператор).
        </Paragraph>
        <Paragraph>
          1.1. Оператор ставит своей важнейшей целью и условием осуществления
          своей деятельности соблюдение прав и свобод человека и гражданина при
          обработке его персональных данных, в том числе защиты прав на
          неприкосновенность частной жизни, личную и семейную тайну.
        </Paragraph>
        <Paragraph>
          1.2. Настоящая политика Оператора в отношении обработки персональных
          данных (далее – Политика) применяется ко всей информации, которую
          Оператор может получить о посетителях веб-сайта
        </Paragraph>
        <Paragraph>2. Основные понятия, используемые в Политик</Paragraph>
        <Paragraph>
          2.1. Автоматизированная обработка персональных данных – обработка
          персональных данных с помощью средств вычислительной техники.
        </Paragraph>
        <Paragraph>
          2.2. Блокирование персональных данных – временное прекращение
          обработки персональных данных (за исключением случаев, если обработка
          необходима для уточнения персональных данных).
        </Paragraph>
        <Paragraph>
          2.3. Веб-сайт – совокупность графических и информационных материалов,
          а также программ для ЭВМ и баз данных, обеспечивающих их доступность в
          сети интернет по сетевому адресу
        </Paragraph>
        <Paragraph>
          2.4. Информационная система персональных данных — совокупность
          содержащихся в базах данных персональных данных, и обеспечивающих их
          обработку информационных технологий и технических средств.
        </Paragraph>
        <Paragraph>
          2.5. Обезличивание персональных данных — действия, в результате
          которых невозможно определить без использования дополнительной
          информации принадлежность персональных данных конкретному Пользователю
          или иному субъекту персональных данных.
        </Paragraph>
        <Paragraph>
          2.6. Обработка персональных данных – любое действие (операция) или
          совокупность действий (операций), совершаемых с использованием средств
          автоматизации или без использования таких средств с персональными
          данными, включая сбор, запись, систематизацию, накопление, хранение,
          уточнение (обновление, изменение), извлечение, использование, передачу
          (распространение, предоставление, доступ), обезличивание,
          блокирование, удаление, уничтожение персональных данных.
        </Paragraph>
        <Paragraph>
          2.7. Оператор – государственный орган, муниципальный орган,
          юридическое или физическое лицо, самостоятельно или совместно с
          другими лицами организующие и (или) осуществляющие обработку
          персональных данных, а также определяющие цели обработки персональных
          данных, состав персональных данных, подлежащих обработке, действия
          (операции), совершаемые с персональными данными.
        </Paragraph>
        <Paragraph>
          2.8. Персональные данные – любая информация, относящаяся прямо или
          косвенно к определенному или определяемому Пользователю веб-сайта.
        </Paragraph>
        <Paragraph>
          2.9. Персональные данные, разрешенные субъектом персональных данных
          для распространения, - персональные данные, доступ неограниченного
          круга лиц к которым предоставлен субъектом персональных данных путем
          дачи согласия на обработку персональных данных, разрешенных субъектом
          персональных данных для распространения в порядке, предусмотренном
          Законом о персональных данных (далее - персональные данные,
          разрешенные для распространения).
        </Paragraph>
        <Paragraph>
          2.11. Предоставление персональных данных – действия, направленные на
          раскрытие персональных данных определенному лицу или определенному
          кругу лиц.
        </Paragraph>
        <Paragraph>
          2.12. Распространение персональных данных – любые действия,
          направленные на раскрытие персональных данных неопределенному кругу
          лиц (передача персональных данных) или на ознакомление с персональными
          данными неограниченного круга лиц, в том числе обнародование
          персональных данных в средствах массовой информации, размещение в
          информационно-телекоммуникационных сетях или предоставление доступа к
          персональным данным каким-либо иным способом.
        </Paragraph>
        <Paragraph>
          2.13. Трансграничная передача персональных данных – передача
          персональных данных на территорию иностранного государства органу
          власти иностранного государства, иностранному физическому или
          иностранному юридическому лицу.
        </Paragraph>
        <Paragraph>
          2.14. Уничтожение персональных данных – любые действия, в результате
          которых персональные данные уничтожаются безвозвратно с невозможностью
          дальнейшего восстановления содержания персональных данных в
          информационной системе персональных данных и (или) уничтожаются
          материальные носители персональных данных.
        </Paragraph>
      </Text>
      <Footer />
    </Container>
  );
}
