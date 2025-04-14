import mp4 from "../../assets/Gintani Equipped Lamborghini Aventador SVJ  _ 4K(480P).mp4";
import mp42 from "../../assets/Lamborghini2.mp4";
import temeriario from "../../assets/Temerario1.png";
import huracan from "../../assets/huracan.png";
import revuelto from "../../assets/revuelto.png";
import lambo1 from "../../assets/Lamobo-mountain.png";
import lambo2 from "../../assets/lambo2.png";
import { useEffect, useRef, useState } from "react";
import TextAnimation from "../../shared/TextAnimation";
import "react-slideshow-image/dist/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-slideshow-image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

export default function Home() {
  const [select, setSelect] = useState<number>(0);
  const [slideCar, setSlideCar] = useState<number>(0);
  const [slideVideo, setSlideVideo] = useState<number>(0);

  const [car, setCar] = useState(cars[0]);
  const ref = useRef();
  const videos = [
    { video: mp4, caption: 0 },
    { video: mp42, caption: 1 },
    { video: mp4, caption: 2 },
  ];

  /* const hoverEff =
    " hover:cursor-pointer hover:border-b-2 border-black hover:scale-x-100 transition duration-500 origin-left "; */

  const hoverEff =
    "relative hover:cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]";
  const selectEff =
    "relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-13px]";

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
  const setting = {
    dots: true,
    fade: true,
    arrows: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,

    beforeChange: (current: number) => {
      console.log(current);
      setSlideVideo(current);
    },
  };

  useEffect(() => {
    //window.location.reload();
  }, []);

  function handleSelect(val: number) {
    setSelect(val);
  }

  function moveNext(val: number) {
    handleSelect(val);

    if (select < val) ref.current.goNext();
  }

  function movePrev(val: number) {
    handleSelect(val);
    if (select > val) ref.current.goBack();
  }

  return (
    <>
      {/* <Slider {...setting}>
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay={true}
            loop={true}
            muted={true}
            className={` w-full h-screen  bg-cover bg-center object-cover relative `}
          >
            <source src={video.video} type="video/mp4" />
          </video>
        ))}
      </Slider> */}
      <Fade arrows={false} ref={ref}>
        {videos.map((video, index) => (
          <div key={video.caption}>
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              className="w-full h-screen z-10 bg-cover object-cover relative "
            >
              <source src={video.video} type="video/mp4" />
            </video>
            <div className="absolute  top-0 z-10 w-full  px-4 md:px-24 h-full pt-40 xl:pt-56 xl:px-28">
              <TextAnimation size={"big"} color="white" shouldAnimate={true} />
              <div className=" absolute bottom-0 right-0 left-0 flex justify-center items-center gap-3 py-10 lg:justify-start lg:px-24 xl:px-28">
                {videos.map((_, index) => (
                  <button
                    className={`w-[60px] h-4 relative after:block after:content-[''] after:absolute  after:w-full after:bottom-0 after:transition-all after:duration-200 ${
                      select === index
                        ? "after:h-[3px] after:bg-white"
                        : "after:h-[1px] after:bg-[#ffffff7f]"
                    }`}
                    onClick={() =>
                      index > select ? moveNext(index) : movePrev(index)
                    }
                  >
                    <span></span>
                  </button>
                ))}
              </div>

              {/* <div className=" absolute bottom-0 right-0 left-0 flex justify-center items-center gap-3 py-10 lg:justify-start lg:px-24 xl:px-28">
                <button
                  className={`w-[60px] h-4 relative after:block after:content-[''] after:absolute  after:w-full after:bottom-0 after:transition-all after:duration-200 ${
                    select
                      ? "after:h-[3px] after:bg-white"
                      : "after:h-[1px] after:bg-[#ffffff7f]"
                  }`}
                  onClick={() => movePrev(true)}
                >
                  <span></span>
                </button>

                <button
                  className={`w-[60px] h-4 relative after:block after:content-[''] after:absolute  after:w-full after:bottom-0 after:transition-all after:duration-200  ${
                    !select
                      ? "after:h-[3px] after:bg-white"
                      : "after:h-[1px] after:bg-[#ffffff7f]"
                  }`}
                  onClick={() => moveNext(false)}
                >
                  <span></span>
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </Fade>
      {/* <Fade>
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay={true}
            loop={true}
            muted={true}
            className={` w-full h-screen  bg-cover bg-center object-cover relative `}
          >
            <source src={video.video} type="video/mp4" />
          </video>
        ))}
      </Fade> */}
      ///////////////////////////////////////////////////////
      {/* <div className="w-full h-screen ">
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
      </div> */}
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
