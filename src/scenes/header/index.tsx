import { useState } from "react";
import Lambo from "../../assets/Lamborghini.png";
import Message from "../../assets/Message.png";
import Search from "../../assets/Search.png";
import Hexa from "../../assets/hexagon.png";
import UpWhite from "../../assets/UpWhite.png";
import UpBlack from "../../assets/UpBlack.png";
import Instagram from "../../assets/instagram.png";
import Threads from "../../assets/threads.png";
import Facebook from "../../assets/facebook.png";
import Youtube from "../../assets/youtube.png";
import Twitter from "../../assets/twitter.png";
import Tiktok from "../../assets/tiktok.png";
import Linkedin from "../../assets/linkedin.png";
import Weibo from "../../assets/weibo.png";
import Youku from "../../assets/youku.png";
import Wechat from "../../assets/wechat.png";
import Discord from "../../assets/discord.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  function handleOpen1() {
    if (isOpen2) {
      setIsOpen2((isOpen2) => !isOpen2);
    }

    setIsOpen1((isOpen1) => !isOpen1);
  }
  function handleOpen2() {
    if (isOpen1) {
      setIsOpen1((isOpen1) => !isOpen1);
    }

    setIsOpen2((isOpen2) => !isOpen2);
  }
  return (
    <header>
      <div className="bg-black  flex justify-between px-4 p-2 fixed top-0 left-0 right-0 z-20">
        <img src={Lambo} alt="Lamborghini Icon" className="w-11 h-11" />
        <nav className="">
          <ul className="text-white  hidden lg:flex">
            <li>MODELS</li>
            <li>BEYOND</li>
            <li>WONERSHIP</li>
            <li>MOTOSPORT</li>
          </ul>
          <ul className="text-white  hidden lg:flex">
            <li>DEALERSHIPS</li>
            <li>MUSEUM</li>
            <li>STORE</li>
          </ul>
        </nav>
        <div className="flex gap-7 items-center">
          <img src={Message} alt="Message Icon" className="w-8 h-8" />
          <img src={Search} alt="Search Icon" className="w-6 h-6" />

          <button
            className={`w-8 h-7 flex justify-center items-center border ${
              isOpen ? "" : ""
            }`}
            onClick={handleOpen}
          >
            <div className="w-6 h-4    relative">
              <div
                className={`${
                  isOpen &&
                  " rotate-45 duration-700 transition-all top-0 bottom-0 my-auto"
                } bg-white w-full h-[0.05rem]   absolute  top-0   `}
              ></div>
              <div
                className={`${
                  isOpen && "opacity-0 transition-all duration-700"
                } bg-white w-full h-[0.05rem] absolute my-auto top-0 bottom-0 `}
              ></div>
              <div
                className={`${
                  isOpen &&
                  "  -rotate-45 transition-all duration-700  top-0 bottom-0 my-auto"
                } bg-white w-full h-[0.05rem] absolute   bottom-0`}
              ></div>
            </div>
          </button>
          {/*  ) : (
            <button className=" " onClick={handleOpen}>
              <div className=" w-8 h-8 relative">
                <div className=" bg-white w-full h-[0.05rem] absolute top-0 bottom-0 my-auto rotate-45 transition-all duration-700"></div>

                <div className=" bg-white w-full h-[0.05rem] absolute top-0 bottom-0 my-auto -rotate-45 transition-all duration-700"></div>
              </div>
            </button>
          )} */}
        </div>
      </div>
      <nav
        className={`bg-black text-white  fixed h-screen flex flex-col  overflow-clip transition-all ease-in duration-500 right-0 left-0 ${
          isOpen ? "top-0   pt-14" : "-top-[100%]"
        }`}
      >
        <ul
          className={` flex flex-col pt-14 px-6 gap-4 overflow-auto text-2xl font-semibold`}
        >
          <li>MODELS</li>
          <li>BEYOND</li>
          <li>WONERSHIP</li>
          <li>MOTOSPORT</li>
          <li>DEALERSHIPS</li>
          <li>MUSEUM</li>
          <li>STORE</li>
          <li>CUSTOMIZATION</li>
          <li>ACCESSORIES</li>
          <li>FINANCIAL SERVICES</li>
          <li>WARRANTY EXTENSION</li>
          <li>DESIGN</li>
          <li>INNOVATION & EXCELLENCE</li>
          <li>SUSTAINABILITY</li>
        </ul>
        <div
          className={`flex justify-between text-xl relative bg-green-500 delay-500 
        `}
        >
          <button
            className={`${
              isOpen1
                ? "bg-white text-black "
                : " border border-[#ffffff40] bg-black delay-300"
            } w-1/2 flex h-16 justify-start z-40 items-center gap-2 px-6 `}
            onClick={handleOpen1}
          >
            <div
              className="w-[29px] h-[29px]  flex justify-center items-center relative 
            "
            >
              {isOpen1 ? (
                <img src={UpBlack} alt="arrow up" className="w-2 h-2" />
              ) : (
                <>
                  <img src={Hexa} alt="hexagonal shape" className="absolute" />
                  <img src={UpWhite} alt="arrow up" className="w-2 h-2" />
                </>
              )}
            </div>
            ENGLISH
          </button>
          <ul
            className={`absolute transition-all ease-in duration-300 flex flex-col justify-center px-6 gap-4  items-start bg-white text-black text-base left-0 h-[330px] w-1/2 ${
              isOpen1 ? "-top-[330px] border-b" : "top-0"
            } ${!isOpen && " "}`}
          >
            <li>ITALIAN</li>
            <li>FRENCH</li>
            <li>SPANISH</li>
            <li>GERMAN</li>
            <li>CHINESE</li>
            <li>JAPANESE</li>
            <li>RUSSIAN</li>
          </ul>

          <button
            className={`${
              isOpen2
                ? "bg-white text-black"
                : " border border-[#ffffff40] bg-black delay-300"
            } w-1/2 flex h-16 justify-start items-center gap-2 px-6 z-40`}
            onClick={handleOpen2}
          >
            <div
              className="w-[29px] h-[29px]  flex justify-center items-center relative
            "
            >
              {isOpen2 ? (
                <img src={UpBlack} alt="arrow up" className="w-2 h-2" />
              ) : (
                <>
                  <img src={Hexa} alt="hexagonal shape" className="absolute" />
                  <img src={UpWhite} alt="arrow up" className="w-2 h-2" />
                </>
              )}
            </div>
            SOCIAL
          </button>
          <ul
            className={`absolute transition-all ease-in duration-300 flex flex-col justify-center px-6 gap-4 items-start bg-white text-black text-base right-0 h-[480px] w-1/2 ${
              isOpen2 ? "-top-[480px] border-b" : "top-0"
            } ${!isOpen && " "}`}
          >
            <li className="flex gap-3  items-center ">
              <img src={Instagram} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">INSTAGRAM</p>
            </li>
            <li className="flex gap-3 items-center ">
              <img src={Threads} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">THREADS</p>
            </li>
            <li className="flex gap-3 items-center ">
              <img src={Facebook} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">FACEBOOK</p>
            </li>
            <li className="flex gap-3 items-center ">
              <img src={Youtube} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">YOUTUBE</p>
            </li>
            <li className="flex gap-3 items-center ">
              <img src={Twitter} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">TWITTER</p>
            </li>
            <li className="flex gap-3 items-center ">
              <img src={Tiktok} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">TIKTOK</p>
            </li>
            <li className="flex gap-3 items-center ">
              <img src={Linkedin} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">LINKEDIN</p>
            </li>
            <li className="flex gap-3 items-center ">
              <img src={Weibo} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">WEIBO</p>
            </li>
            <li className="flex gap-3 items-center ">
              <img src={Youku} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">YOUKU</p>
            </li>
            <li className="flex gap-3 items-center ">
              <img src={Wechat} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">WECHAT</p>
            </li>
            <li className="flex gap-3 items-center ">
              <img src={Discord} alt="" className="w-[18px] h-[18px] " />
              <p className=" text-end">DISCORD</p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
