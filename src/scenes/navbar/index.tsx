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
import { useState } from "react";

type Props = {
  isOpen?: boolean;
};

export default function Navbar({ isOpen }: Props) {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

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
    <nav className="">
      <div>
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
      </div>
      <div
        className={`bg-red-400 text-white  fixed h-screen flex flex-col justify-between overflow-clip transition-all ease-in duration-500 right-0  left-0 lg:hidden ${
          isOpen ? "top-0   pt-14" : "-top-[100%]"
        }`}
      >
        <ul
          className={`bg-green-500 flex flex-col pt-14 px-6 gap-4 overflow-auto text-2xl font-semibold`}
        >
          <li>
            MODELS {">"}
            <ul>
              <li>lam</li>
              <li>lam</li>
              <li>lam</li>
              <li>lam</li>
              <li>lam</li>
              <li>lam</li>
              <li>lam</li>
            </ul>
          </li>
          {/* <li>BEYOND</li>
          <li>WONERSHIP{">"}</li>
          <li>MOTOSPORT{">"}</li>
          <li>DEALERSHIPS</li>
          <li>MUSEUM</li>
          <li>STORE</li>
          <li>CUSTOMIZATION</li>
          <li>ACCESSORIES</li>
          <li>FINANCIAL SERVICES</li>
          <li>WARRANTY EXTENSION</li>
          <li>DESIGN</li>
          <li>INNOVATION & EXCELLENCE</li>
          <li>SUSTAINABILITY</li> */}
        </ul>
        <div
          className={`flex justify-between text-xl relative  bg-green-500 delay-500 
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
          {/* <ul
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
          </ul> */}

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
          {/* <ul
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
          </ul> */}
        </div>
      </div>
    </nav>
  );
}