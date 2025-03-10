import mp4 from "../../assets/Gintani Equipped Lamborghini Aventador SVJ  _ 4K(480P).mp4";
import temeriario from "../../assets/Temerario.webp";
import huracan from "../../assets/huracan.png";
import revuelto from "../../assets/revuelto.webp";

import { useEffect, useState } from "react";
import TextAnimation from "../../shared/TextAnimation";

const cars = [
  {
    id: 1,
    name: "Temerario",
    image: temeriario,
    title: "CONFIGURATOR",
    text: "CREATE YOUR TEMERARIO",
    information:
      "The vehicle is not yet offered for sale and is therefore not subject to Directive 1999/94/EC. The fuel consumption and emissions data is in the type approval stage",
  },
  {
    id: 2,
    name: "Huracan",
    image: huracan,
    title: "CONFIGURATOR",
    text: "CREATE YOUR HURACAN",
    information:
      "Combined energy consumption: 10,1 kWh/100 Km plus 11,86 l/100km; Combined CO2 emissions: 276 g/km; Combined CO2 efficiency class: G; CO2 class with discharged battery: G; Combined fuel consumption with discharged battery: 17,8 l/100km",
  },
  {
    id: 3,
    name: "Revuelto",
    image: revuelto,
    title: "CONFIGURATOR",
    text: "CREATE YOUR REVUELTO",
    information:
      "Combined energy consumption: 10,1 kWh/100 Km plus 11,86 l/100km; Combined CO2 emissions: 276 g/km; Combined CO2 efficiency class: G; CO2 class with discharged battery: G; Combined fuel consumption with discharged battery: 17,8 l/100km",
  },
];

export default function Home() {
  const [select, setSelect] = useState<boolean>(false);
  const [car, setCar] = useState(cars[0]);

  /* const hoverEff =
    " hover:cursor-pointer hover:border-b-2 border-black hover:scale-x-100 transition duration-500 origin-left "; */

  const hoverEff =
    "relative hover:cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]";
  const selectEff =
    "relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-13px]";

  useEffect(() => {
    //window.location.reload();
  }, [select]);
  function handleSelect(val: boolean) {
    setSelect(val);
  }

  return (
    <>
      <div className="w-full h-screen ">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="w-full h-screen z-10 bg-cover object-cover relative "
        >
          <source src={mp4} type="video/mp4" />
        </video>
        <div className="absolute  top-0 z-10 w-full  px-4 md:px-24 h-full pt-40 xl:pt-56 xl:px-28">
          <TextAnimation size={"big"} color="white" shouldAnimate={true} />

          {/* <img src={hexa} alt="hexagon" /> */}
          <div className=" absolute bottom-0 right-0 left-0 flex justify-center items-center gap-3 py-10 lg:justify-start lg:px-24 xl:px-28">
            <button
              className={`w-[60px] h-4 relative after:block after:content-[''] after:absolute  after:w-full after:bottom-0 after:transition-all after:duration-200 ${
                select
                  ? "after:h-[3px] after:bg-white"
                  : "after:h-[1px] after:bg-[#ffffff7f]"
              }`}
              onClick={() => handleSelect(true)}
            >
              <span></span>
            </button>

            <button
              className={`w-[60px] h-4 relative after:block after:content-[''] after:absolute  after:w-full after:bottom-0 after:transition-all after:duration-200  ${
                !select
                  ? "after:h-[3px] after:bg-white"
                  : "after:h-[1px] after:bg-[#ffffff7f]"
              }`}
              onClick={() => handleSelect(false)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen py-5 ">
        <p className="text-center px-20 font-light">{car.information}</p>
        <div className=" relative flex items-center before:absolute before:content-temerario before:z-[-1] before: before:bg-red-500">
          <div className="w-2/5 h-fit flex flex-col gap-10 items-start justify-center pl-24">
            <TextAnimation
              size="small"
              title={car.title}
              text={car.text}
              color="black"
              shouldAnimate={true}
            />
            <div className=" w-fit  text-black flex text-xl border-b font-light  ">
              {cars.map((item: any) => (
                <button
                  className={` pr-20  py-3 ${hoverEff} ${
                    car.id === item.id ? selectEff : ""
                  }`}
                  key={item.name}
                  onClick={() => setCar(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="w-3/5 flex items-end">
            <img src={car.image} alt="car" className="h-[560px]" />
            {/* <img src={huracan} alt="car" /> */}
          </div>
        </div>
        <p className="text-center px-20 font-light">{car.information}</p>
      </div>
      <div
        className=" h-screen-minus-90 w-full bg-lambo-1 bg-no-repeat bg-right 
      "
      >
        <div className="max-w-[750px] h-full flex flex-col gap-10 items-start justify-center pl-24">
          <TextAnimation
            title="DEALER LOCATOR"
            text="FIND YOUR COUNTRY DEALER"
            size="small"
            color="white"
            shouldAnimate={false}
          />
        </div>
      </div>
    </>
  );
}
