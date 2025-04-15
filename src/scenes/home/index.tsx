import temeriario from "../../assets/Temerario1.png";
import huracan from "../../assets/huracan.png";
import revuelto from "../../assets/revuelto.png";
import lambo1 from "../../assets/Lamobo-mountain.png";
import lambo2 from "../../assets/lambo2.png";
import { useState } from "react";
import TextAnimation from "../../shared/TextAnimation";
import "react-slideshow-image/dist/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarType } from "../../shared/types";
import VideoSlide from "./VideoSlide";
import CarModels from "./CarModels";

const cars: CarType[] = [
  {
    id: 1,
    name: "Temerario",
    image: temeriario,
    background: "bg-temerario-txt",
    title: "CONFIGURATOR",
    text: "CREATE YOUR TEMERARIO",
    information:
      "The vehicle is not yet offered for sale and is therefore not subject to Directive 1999/94/EC. The fuel consumption and emissions data is in the type approval stage",
  },
  {
    id: 2,
    name: "Huracan",
    image: huracan,
    background: "bg-huracan-txt",
    title: "CONFIGURATOR",
    text: "CREATE YOUR HURACAN",
    information:
      "Combined energy consumption: 10,1 kWh/100 Km plus 11,86 l/100km; Combined CO2 emissions: 276 g/km; Combined CO2 efficiency class: G; CO2 class with discharged battery: G; Combined fuel consumption with discharged battery: 17,8 l/100km",
  },
  {
    id: 3,
    name: "Revuelto",
    image: revuelto,
    background: "bg-revuelto-txt",
    title: "CONFIGURATOR",
    text: "CREATE YOUR REVUELTO",
    information:
      "Combined energy consumption: 10,1 kWh/100 Km plus 11,86 l/100km; Combined CO2 emissions: 276 g/km; Combined CO2 efficiency class: G; CO2 class with discharged battery: G; Combined fuel consumption with discharged battery: 17,8 l/100km",
  },
];

export default function Home() {
  const [slideCar, setSlideCar] = useState<number>(0);
  /* const [slideVideo, setSlideVideo] = useState<number>(0); */

  /* const hoverEff =
    " hover:cursor-pointer hover:border-b-2 border-black hover:scale-x-100 transition duration-500 origin-left "; */

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    afterChange: (current: number) => {
      setSlideCar(current);
    },
  };

  return (
    <>
      <VideoSlide />
      <CarModels cars={cars} />
      <div className="w-full py-7  lg:hidden">
        <p className="text-[30px] font-semibold px-4">MODELS</p>

        <Slider {...settings}>
          {cars.map((car) => (
            <div
              key={car.id}
              className="w-[300px] sm:w-[400px] md:w-[530px] h-[200px] sm:h-[300px] md:h-[350px] bg-gradient-to-t from-white via-gray-300 to-white"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-[300px] sm:w-[400px] md:w-[530px]"
              />
            </div>
          ))}
        </Slider>
        <div>
          <div className="px-4 flex flex-col items-start gap-2">
            <p className="text-4xl font-bold">{cars[slideCar].name}</p>
            <p className="text-lg font-semibold">You can't hide who you are</p>
            <button className=" px-16 py-2 w-full border border-[#c2c2c2]">
              EXPLORE THE MODEL
            </button>
            <button className=" px-16 py-2 w-full border border-[#c2c2c2]">
              OPEN CAR CONFIGURATOR
            </button>
            <p className="text-center font-light py-2">
              {cars[slideCar].information}
            </p>
          </div>
        </div>
      </div>
      <div
        className=" h-screen-minus-90 w-full bg-lambo-1 bg-no-repeat bg-right 
      "
      >
        <div
          className="max-w-[750px] h-full flex flex-col gap-10 items-start justify-center  
        px-4 md:px-24  xl:px-28"
        >
          <TextAnimation
            title="DEALER LOCATOR"
            text="FIND YOUR COUNTRY DEALER"
            size="small"
            color="white"
            shouldAnimate={false}
          />
        </div>
      </div>
      <div>
        <div className="px-4 pt-20 pb-10 bg-[#F8F8F7] lg:px-20 2xl:px-36">
          <p className="text-[30px] font-semibold lg:font-bold lg:text-[34px]">
            NEWS
          </p>
          <div>
            <p className="text-[45px] leading-none py-6 font-bold lg:text-[100px] 2xl:text-[110px]">
              LAMBORGHINI WORLD
            </p>
            <img src={lambo1} alt="lamborghini wallpaper" />
          </div>
        </div>
        <div className="px-4 pt-10 flex flex-col gap-4 lg:px-20 2xl:px-36">
          <p className="font-semibold text-lg ">12 MARCH 2025</p>
          <p className="bg-[#F8F8F7] w-fit px-2">EVENTS</p>
          <p className="font-bold text-3xl ">
            A LAMBORGHINI GATEWAY TO COURCHEVEL
          </p>
          <p>
            Combined energy consumption: 10,1 kWh/100 Km plus 11,86 l/100km;
            Combined CO2 emissions: 276 g/km; Combined CO2 efficiency class: G;
            CO2 class with discharged battery: G; Combined fuel consumption with
            discharged battery: 17,8 l/100km
          </p>
          <div className="flex flex-col gap-4 py-14 lg:flex-row">
            <img src={lambo2} alt="lambo" className="lg:w-1/2" />
            <div className=" lg:flex lg:flex-col lg:gap-3 lg:items-start">
              <p className="font-semibold text-lg lg:font-thin">6 March 2025</p>

              <p className="font-bold text-3xl ">The new V8 Biturbo</p>
              <p>
                The vehicle is not yet offered for sale and is therefore not
                subject to Directive 1999/94/EC. The fuel consumption and
                emissions data is in the type approval stage
              </p>
              <button className="hidden lg:inline px-16 py-4 border border-[#c2c2c2]">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
