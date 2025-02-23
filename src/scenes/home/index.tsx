import hexa from "../../assets/Hexagon.png";
import mp4 from "../../assets/Gintani Equipped Lamborghini Aventador SVJ  _ 4K(480P).mp4";
import { useState } from "react";

export default function Home() {
  const [select, setSelect] = useState(false);
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
        <div className="absolute top-0 z-10  w-full  px-4 md:px-24 h-full pt-40">
          <p className="text-white text-xl  lg:text-2xl lg:font-semibold xl:text-3xl ">
            READY TO GO BEYOND ?
          </p>
          <p className="text-white text-[40px] font-bold mb-4 lg:text-[80px] xl:text-[110px] leading-none ">
            FAST FORWORLD
          </p>
          <img src={hexa} alt="hexagon" />
          <div className=" absolute bottom-0 right-0 left-0 flex justify-center items-center gap-3 py-10 lg:justify-start lg:px-24">
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
              className={`w-[60px] h-4 relative after:block after:content-[''] after:absolute  after:w-full after:bottom-0 after:transition-all after:duration-200 ${
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
      <div className="z-10">
        <div className="bg-slate-300">
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
        </div>
        <div className="bg-red-200">
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
        </div>
        <div className="bg-blue-200">
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
          <p>lkjljljlj</p>
        </div>
      </div>
    </>
  );
}
