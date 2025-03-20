import mp4 from "../../assets/Gintani Equipped Lamborghini Aventador SVJ  _ 4K(480P).mp4";
import temeriario from "../../assets/Temerario1.png";
import huracan from "../../assets/huracan.png";
import revuelto from "../../assets/revuelto.png";

import { useEffect, useState } from "react";
import TextAnimation from "../../shared/TextAnimation";
import { caption, video } from "motion/react-client";
import "react-slideshow-image/dist/styles.css";
import Slider from "react-slick";
import { Fade } from "react-slideshow-image";

const cars = [
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

const fadeImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "First Slide",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Second Slide",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Third Slide",
  },
];

export default function Home() {
  const [select, setSelect] = useState<boolean>(false);
  const [car, setCar] = useState(cars[0]);

  const videos = [
    { video: mp4, caption: 1 },
    { video: mp4, caption: 2 },
  ];

  /* const hoverEff =
    " hover:cursor-pointer hover:border-b-2 border-black hover:scale-x-100 transition duration-500 origin-left "; */

  const hoverEff =
    "relative hover:cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]";
  const selectEff =
    "relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-13px]";

  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  useEffect(() => {
    //window.location.reload();
  }, [select]);
  function handleSelect(val: boolean) {
    setSelect(val);
  }

  return (
    <>
      {/* <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img style={{ width: "100%" }} src={fadeImage.url} />
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div> */}
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
      <div className="hidden  flex-col w-full h-screen py-5  lg:flex">
        <p className="text-center px-20 font-light">{car.information}</p>
        <div
          className={`  flex items-center  ${car.background}  bg-no-repeat bg-cover bg-[center_bottom_-7rem]  bg-z-[-1]  `}
        >
          {/* <div className=" relative flex items-center before:absolute  before:w-full before:h-full   before:content-temerario before:z-[-1]  before:bg-red-500"> */}
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
          <div className="w-3/5 flex items-end ">
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
    </>
  );
}
