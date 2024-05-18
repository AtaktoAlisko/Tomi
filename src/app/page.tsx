import Image from "next/image";
import eagle from "../../public/images/eagle.png";
import calendar from "../../public/images/calendar.png";
import urta from "../../public/images/urta.png";
import horse from "../../public/images/horse.png";
import Main from "../components/Main";
import Attendance from "../components/Attendance";
import ornek from "../../public/images/ornek.png";
import map from "../../public/images/map.png";
import cloud from "../../public/images/cloud.png";
import wolf from "../../public/images/wolf.png";
export default function Home() {
  return (
    <main className="flex flex-col  items-center ">
      <Main />
      <Image
        className="  tilt-animation "
        src={eagle}
        alt="Tomiris"
        width={300}
        height={300}
      />
      <Image
        className=" mt-10 cloud movingImage"
        src={cloud}
        alt="Cloud"
        width={200}
        height={150}
      />
      <Image
        className=" mt-10 cloudd movingImage1  "
        src={cloud}
        alt="Tomiris"
        width={210}
        height={160}
      />
      <Image
        className=" mt-10 clouddd movingImage2  "
        src={cloud}
        alt="Tomiris"
        width={210}
        height={160}
      />
      <Image
        className=" mt-10 cloudddd movingImage3  "
        src={cloud}
        alt="Tomiris"
        width={210}
        height={160}
      />
      <Image
        className=" mt-10 clouddddd movingImage4  "
        src={cloud}
        alt="Tomiris"
        width={180}
        height={140}
      />
        <Image
        className=" mt-10 clouddddddd movingImage6  "
        src={cloud}
        alt="Tomiris"
        width={180}
        height={140}
      />
       <Image
        className=" mt-10 cloudddddd movingImage5  "
        src={cloud}
        alt="Tomiris"
        width={170}
        height={150}
      />
      <div className="mt-10 text-center text-[24px] sm:text-[22px]  shimmer-text">
        <p className="">Құрметті қонақтар!</p>
        <p className="">Cіз(дер)ді қызымыз</p>
        <p className="">Томиристің</p>
        <p className="">тұсау кесер тойына</p>
        <p className="">арналған салтанатты</p>
        <p className="">ақ дастарханымыздың</p>
        <p className="">қадірлі қонағы болуға</p>
        <p className="">шақырамыз!!!</p>
      </div>

      <div className="mt-10 text-center text-[24px] sm:text-[22px] shimmer-text">
        <p className="bastau">Той салтанаты:</p>
        <p className="bastau">5 шілде 2024 жыл</p>
        <p className="bastau">сағат 18:00</p>
      </div>

      <Image
        className="mt-10 mb-10 "
        height={200}
        width={400}
        src={calendar}
        alt="calendar"
      />
      <Image
        className="ornek"
        height={35}
        width={35}
        src={ornek}
        alt="calendar"
      />

      <Image
        className=" mt-[120px] urta-animation"
        height={200}
        width={300}
        src={urta}
        alt="urta"
      />

      <div className="text-center text-[26px]   sm:text-[24px] mb-[10px] shimmer-text">
        <p>Мекен жайымыз: </p>
        <p> Талдықорған қаласы</p>
        <p>Куренбель 40</p>
        <p className="">"Пиала"</p>
        <p> Мейрамханасы</p>
      </div>

      <Image
        className="mt-10 mb-10 horse-animation"
        height={130}
        width={130}
        src={horse}
        alt="horse"
      />

      <div className="kurmet text-center  mb-10 text-[24px] sm:text-[22px] shimmer-text">
        <p className="">Cіздерге ыңғайлы болу үшін</p>
        <p className="">төмендегі көрсетілген картаны қолданыңыз</p>
      </div>
      <div className="flex justify-center justify-between animate-bounce  mb-10">
        <a href="https://yandex.ru/maps/org/piala/33010557490/?ll=78.420631%2C45.048394&z=15.37">
          <Image
            height={150}
            width={150}
            src={map}
            alt="map"
            style={{ marginRight: "30px" }}
          />
        </a>
        <a href="https://www.instagram.com/piala.tdk/?igsh=NTc4MTIwNjQ2YQ%3D%3D">
          <Image height={150} width={150} src={urta} alt="insta" />
        </a>
      </div>

      <div className="kurmet text-center mb-10 text-[26px] sm:text-[24px] shimmer-text">
        <p className="b"> Той иелері:</p>
        <p className=" ">Әжесі:Айгуль</p>
        <p className="">Ата-анасы:</p>
        <p className="">Алибек && Мөлдір</p>
      </div>
     

      <Attendance />
    </main>
  );
}
