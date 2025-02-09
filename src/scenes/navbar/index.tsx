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

  const navigationData = [
    {
      id: "1",
      label: "MODELS",
      links: [
        {
          id: "11",
          label: "TEMERARIO",
        },
        {
          id: "12",
          label: "REVUELTO",
        },

        {
          id: "13",
          label: "URUS",
        },
        {
          id: "14",
          label: "HURACÁN",
        },
      ],
    },
    {
      id: "2",
      label: "BEYOND",
    },
    {
      id: "3",
      label: "OWNERSHIP",
    },
    {
      id: "4",
      label: "MOTORSPORT",
    },
    {
      id: "5",
      label: "DEALERSHIPS",
    },
    {
      id: "6",
      label: "MUSUM",
    },
    {
      id: "66",
      label: "STORE",
    },
    {
      id: "7",
      label: "CUSTOMIZATION",
    },
    {
      id: "77",
      label: "ACCESSORIES",
    },
    {
      id: "8",
      label: "FINANCIAL SERVICES",
    },
    {
      id: "9",
      label: "WARRANTY EXTENSION",
    },
    {
      id: "10",
      label: "DESIGN",
    },
    {
      id: "11",
      label: "INNOVATION & EXCELLENCE",
    },
    {
      id: "12",
      label: "SUSTAINABILITY",
    },
    {
      id: "13",
      label: "HISTORY",
    },
    {
      id: "14",
      label: "DIRVING PROGRAMS",
    },
    {
      id: "15",
      label: "LOUNGE",
    },
    {
      id: "16",
      label: "CLUB",
    },
    {
      id: "17",
      label: "NEWS",
    },
    {
      id: "18",
      label: "PODCAST",
    },
  ];
  const languages = [
    "ENGLISH",
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
    "relative hover:cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:mt-1 ";

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
          {navigationData.map((item, index) =>
            index < 4 ? (
              <li className={hoverEff} key={item.label}>
                {item.label}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <ul className="text-white gap-2 hidden lg:flex xl:gap-6">
          {navigationData.map((item, index) =>
            index >= 4 && index < 7 ? (
              <li className={hoverEff} key={index}>
                {item.label}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
      <div
        className={`text-white bg-[#181818] fixed h-screen lg:h-auto lg:pb-10 flex flex-col justify-between  overflow-clip transition-all ease-out duration-700 right-0  left-0 lg:px-[150px] ${
          isOpen ? "top-0 pt-14" : "-top-[100%]"
        } `}
      >
        <Menu
          navigationData={navigationData}
          languages={languages}
          social={social}
          hoverEff={hoverEff}
        />

        <div
          className={`flex justify-between text-xl relative bg-green-500 delay-500 lg:hidden
        `}
        >
          <BottomMenuButton handleOpen={handleOpen1} isOpen={isOpen1}>
            ENGLISH
          </BottomMenuButton>
          <ul
            className={`absolute transition-all ease-in duration-300 flex flex-col justify-center px-6 gap-4  items-start bg-white text-black text-base left-0 h-[330px] w-1/2 ${
              isOpen1 ? "-top-[330px] border-b" : "top-0"
            } `}
          >
            {languages.map((language) => (
              <li key={language}>{language !== "ENGLISH" && language}</li>
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
              <li className="flex gap-3 items-center " key={social.name}>
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
