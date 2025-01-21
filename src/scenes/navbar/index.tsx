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
import BottomMenuButton from "../../shared/BottomMenuButton";

import Menu from "../menu";
type Props = {
  isOpen?: boolean;
};

export default function Navbar({ isOpen }: Props) {
  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const languages = [
    "ITALIAN",
    "FRENCH",
    "SPANSH",
    "GERMAN",
    "CHINESE",
    "JAPANESE",
    "RUSSIAN",
  ];
  const social = [
    { name: "INSTAGRAM", icon: Instagram },
    { name: "THREADS", icon: Threads },
    { name: "FACEBOOK", icon: Facebook },
    { name: "YOUTUBE", icon: Youtube },
    { name: "TWITTER", icon: Twitter },
    { name: "TIKTOK", icon: Tiktok },
    { name: "LINKEDIN", icon: Linkedin },
    { name: "WEIBO", icon: Weibo },
    { name: "YOUKU", icon: Youku },
    { name: "WECHAT", icon: Wechat },
    { name: "DISCORD", icon: Discord },
  ];
  const hoverEff =
    "relative hover:cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:mt-1";

  function handleOpen1() {
    setIsOpen2(false);

    setIsOpen1((isOpen1) => !isOpen1);
  }
  function handleOpen2() {
    setIsOpen1(false);

    setIsOpen2((isOpen2) => !isOpen2);
  }

  return (
    <nav className="lg:grow">
      <div className=" hidden lg:flex lg:justify-between lg:items-center h-full px-5 xl:pl-8 xl:pr-12 text-sm font-light xl:text-base transition-all">
        <ul className="text-white hidden lg:flex gap-2 xl:gap-6 ">
          <li className={hoverEff}>MODELS</li>
          <li className={hoverEff}>BEYOND</li>
          <li className={hoverEff}>OWNERSHIP</li>
          <li className={hoverEff}>MOTOSPORT</li>
        </ul>
        <ul className="text-white gap-2 hidden lg:flex xl:gap-6">
          <li className={hoverEff}>DEALERSHIPS</li>
          <li className={hoverEff}>MUSEUM</li>
          <li className={hoverEff}>STORE</li>
        </ul>
      </div>
      <div
        className={` text-white bg-black fixed h-screen flex flex-col justify-between overflow-clip transition-all ease-out duration-700 right-0  left-0 lg:hidden ${
          isOpen ? "top-0 pt-14" : "-top-[100%]"
        } `}
      >
        <Menu />

        <div
          className={`flex justify-between text-xl relative bg-green-500 delay-500 
        `}
        >
          <BottomMenuButton handleOpen={handleOpen1} isOpen={isOpen1}>
            ENGLISH
          </BottomMenuButton>
          <ul
            className={`absolute transition-all ease-in duration-300 flex flex-col justify-center px-6 gap-4  items-start bg-white text-black text-base left-0 h-[330px] w-1/2 ${
              isOpen1 ? "-top-[330px] border-b" : "top-0"
            } ${!isOpen && " "}`}
          >
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>

          <BottomMenuButton handleOpen={handleOpen2} isOpen={isOpen2}>
            SOCIAL
          </BottomMenuButton>
          <ul
            className={`absolute transition-all ease-in duration-300 flex flex-col justify-center px-6 gap-4 items-start bg-white text-black text-base right-0 h-[480px] w-1/2 ${
              isOpen2 ? "-top-[480px] border-b" : "top-0"
            } `}
          >
            {social.map((social) => (
              <li className="flex gap-3 items-center ">
                <img
                  src={social.icon}
                  alt="icon"
                  className="w-[18px] h-[18px] "
                />
                <p className=" text-end">{social.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
