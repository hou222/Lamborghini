import temeriario from "../../assets/Temerario1.png";
import huracan from "../../assets/huracan.png";
import revuelto from "../../assets/revuelto.png";

import TextAnimation from "../../shared/TextAnimation";
import "react-slideshow-image/dist/styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarType } from "../../shared/types";
import VideoSlide from "./VideoSlide";
import CarModels from "./CarModels";
import CarsSlider from "./CarsSlider";
import NewsSection from "./NewsSection";

export default function Home() {
  const cars: CarType[] = [
    {
      id: 1,
      name: "Temerario",
      image: temeriario,
      width: 1200,
      height: 675,
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
      width: 2048,
      height: 1360,
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
      width: 948,
      height: 559,
      background: "bg-revuelto-txt",
      title: "CONFIGURATOR",
      text: "CREATE YOUR REVUELTO",
      information:
        "Combined energy consumption: 10,1 kWh/100 Km plus 11,86 l/100km; Combined CO2 emissions: 276 g/km; Combined CO2 efficiency class: G; CO2 class with discharged battery: G; Combined fuel consumption with discharged battery: 17,8 l/100km",
    },
  ];
  return (
    <>
      <VideoSlide />
      <CarModels cars={cars} />
      <CarsSlider cars={cars} />
      <div
        className="h-screen-minus-90 w-full bg-lambo-1 bg-no-repeat bg-right 
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
      <NewsSection />
    </>
  );
}
