import mp4 from "../../assets/Gintani Equipped Lamborghini Aventador SVJ  _ 4K(480P).mp4";
import temeriario from "../../assets/Temerario.webp";
import huracan from "../../assets/huracan.png";
import { useEffect, useState } from "react";
import TextAnimation from "../../shared/TextAnimation";

export default function Home() {
  const [select, setSelect] = useState<boolean>(false);
  const [car, setCar] = useState<string>(temeriario);

  /* const hoverEff =
    " hover:cursor-pointer hover:border-b-2 border-black hover:scale-x-100 transition duration-500 origin-left "; */

  const hoverEff =
    "relative hover:cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]";
  const selectEff =
    "relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-13px]";

  const cars = [
    {
      id: 1,
      name: "Temerario",
      image: temeriario,
      title: "CONFIGURATOR",
      text: "CREATE YOUR TEMERARIO",
    },
    {
      id: 2,
      name: "Huracan",
      image: huracan,
      title: "CONFIGURATOR",
      text: "CREATE YOUR TEMERARIO",
    },
    {
      id: 3,
      name: "Aventador",
      image: huracan,
      title: "CONFIGURATOR",
      text: "CREATE YOUR TEMERARIO",
    },
  ];

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
          <TextAnimation size={"big"} />

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
      <div className="w-full h-screen bg-white flex">
        <div className="w-2/5   flex flex-col gap-10 items-start justify-center pl-24">
          <TextAnimation size="small" />
          //
        </div>
        <div className="w-3/5  flex items-end">
          <img src={car} alt="car" />
          {/* <img src={huracan} alt="car" /> */}
        </div>
      </div>
    </>
  );
}
