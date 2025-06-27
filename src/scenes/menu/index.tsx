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
import LeftWhite from "../../assets/LeftWhite.png";
import InstagramW from "../../assets/instagramW.png";
import ThreadsW from "../../assets/threadsW.png";
import FacebookW from "../../assets/facebookW.png";
import YoutubeW from "../../assets/youtubeW.png";
import TwitterW from "../../assets/twitterW.png";
import TiktokW from "../../assets/tik-tokW.png";
import LinkedinW from "../../assets/linkedinW.png";
import WeiboW from "../../assets/weiboW.png";
import YoukuW from "../../assets/youkuW.png";
import WechatW from "../../assets/wechatW.png";
import DiscordW from "../../assets/discordW.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, motion, Variants } from "motion/react";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import Hexa from "../../assets/Hexagon.png";

import { NavigationType, SocialType } from "../../shared/types";
import BottomMenuButton from "../../shared/BottomMenuButton";

type Props = {
  navigationData: NavigationType[];

  isOpen: boolean;
};

export default function Menu({
  navigationData,

  isOpen,
}: Props) {
  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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
  const social: SocialType[] = [
    { name: "INSTAGRAM", icon: { b: Instagram, w: InstagramW } },
    { name: "THREADS", icon: { b: Threads, w: ThreadsW } },
    { name: "FACEBOOK", icon: { b: Facebook, w: FacebookW } },
    { name: "YOUTUBE", icon: { b: Youtube, w: YoutubeW } },
    { name: "TWITTER", icon: { b: Twitter, w: TwitterW } },
    { name: "TIKTOK", icon: { b: Tiktok, w: TiktokW } },
    { name: "LINKEDIN", icon: { b: Linkedin, w: LinkedinW } },
    { name: "WEIBO", icon: { b: Weibo, w: WeiboW } },
    { name: "YOUKU", icon: { b: Youku, w: YoukuW } },
    { name: "WECHAT", icon: { b: Wechat, w: WechatW } },
    { name: "DISCORD", icon: { b: Discord, w: DiscordW } },
  ];

  const variants: Variants = {
    "in-view": { x: "0px", transition: { type: "tween", ease: "easeOut" } },
    "out-of-view": (index: number) => ({
      x: index > 0 ? "100%" : "-100%",
      transition: { type: "tween", ease: "easeOut" },
    }),
  };

  const hoverEff =
    "relative hover:cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:mt-1 ";

  function goToNextLevel(item: NavigationType) {
    if (!item.links) {
      return;
    }

    setSelectedItems([...selectedItems, item.id]);
  }

  function handleOpen1() {
    setIsOpen2(false);

    setIsOpen1((isOpen1) => !isOpen1);
  }
  function handleOpen2() {
    setIsOpen1(false);

    setIsOpen2((isOpen2) => !isOpen2);
  }

  /* function getNavItems(selectedItems: string[]) {
    let itr = 0;
    let result: any[] = [];
    let links = [...navigationData];
    if (selectedItems.length === 0) {
      return navigationData;
    }

    let selectedLink;

    for (let i = 0; i < links.length; i++) {
      if (links[i].id === selectedItems[itr]) {
        selectedLink = links[i];

        if (selectedLink.links) {
          result = [...selectedLink.links];
        }
        break;
      }
    }
    links = [...result];
      itr++;

    return result;
  } */

  const getNavItems = (selectedItems: string[]) => {
    if (selectedItems.length === 0) {
      return navigationData;
    }

    let result = [...navigationData];

    selectedItems.forEach((selectedId) => {
      const selectedLink = result.find((link) => link.id === selectedId);
      result =
        selectedLink && selectedLink.links ? [...selectedLink.links] : [];
    });
    return result;
  };

  const goBack = () => {
    const selectedItemsClone = [...selectedItems];
    selectedItemsClone.pop();
    setSelectedItems([...selectedItemsClone]);
  };
  return (
    <nav>
      <div
        className={`text-white bg-[#181818] fixed h-full lg:h-auto lg:pb-10 flex flex-col justify-between  overflow-clip transition-all ease-out duration-700 right-0 left-0 lg:px-[150px] z-20 ${
          isOpen ? "top-0 pt-14" : "-top-[100%]"
        } `}
      >
        <motion.ul
          variants={variants}
          initial="in-view"
          animate={selectedItems.length > 0 ? "out-of-view" : "in-view"}
          custom={selectedItems.length > 0 ? -1 : 0}
          className={` flex flex-col pt-14 text-2xl px-6 md:px-14 gap-4 overflow-auto  font-semibold lg:hidden `}
        >
          {navigationData?.map((item) => {
            return (
              <li key={item.id}>
                <button
                  onClick={() => {
                    goToNextLevel(item);
                  }}
                  className="w-full flex justify-between items-center"
                >
                  <span>{item.label}</span>
                  {item.links && <MdKeyboardArrowRight />}
                </button>
              </li>
            );
          })}
        </motion.ul>
        <AnimatePresence>
          {selectedItems.length > 0 &&
            selectedItems.map((id, index) => {
              return (
                <motion.ul
                  key={id}
                  variants={variants}
                  initial="out-of-view"
                  animate={
                    index + 1 === selectedItems.length
                      ? "in-view"
                      : "out-of-view"
                  }
                  exit="out-of-view"
                  custom={index + 1 === selectedItems.length ? 1 : -1}
                  className="w-full absolute pt-[68px]  top-0 text-2xl px-6 md:px-14 flex flex-col gap-4 font-semibold
                  "
                >
                  <li>
                    <button
                      className="flex items-center font-normal text-xl gap-2 "
                      onClick={goBack}
                    >
                      <div
                        className="w-[29px] h-[29px]  flex justify-center items-center relative 
            "
                      >
                        <img
                          src={Hexa}
                          alt="hexagonal shape"
                          className="absolute"
                        />
                        <img
                          src={LeftWhite}
                          alt="arrow up"
                          className="w-2 h-2"
                        />
                      </div>
                      <span>BACK</span>
                    </button>
                  </li>
                  {getNavItems(selectedItems.slice(0, index + 1))?.map(
                    (item) => {
                      return (
                        <li key={item.id}>
                          {/* <button
                            onClick={() => goToNextLevel(item)}
                            className="flex flex-row items-center w-full"
                          > */}
                          <span>{item.label}</span>
                          {item.links && <FaChevronRight />}
                          {/* </button> */}
                        </li>
                      );
                    }
                  )}
                </motion.ul>
              );
            })}
        </AnimatePresence>
        {
          <div className="hidden  lg:block">
            <ul className="grid grid-flow-col grid-cols-[460px_460px_450px] grid-rows-5 pt-14 text-2xl font-semibold gap-4 w-full place-items-start border-b-[0.5px] pb-10 border-[#2e2e2e]">
              {navigationData.map(
                (item, index: number) =>
                  index >= 7 && (
                    <li key={item.id} className={hoverEff}>
                      {item.label}
                    </li>
                  )
              )}
            </ul>
            {/* <div className=" w-full h-0.5 my-5 ml-20 bg-white"></div> */}
            <div className=" grid  grid-cols-[460px_460px_450px] row-[4_4_5] gap-4 pt-6 text-lg font-semibold">
              <div>
                <div className="text-[#666]">LANGUAGES</div>
                <ul className="grid grid-cols-[80px_80px_80px] gap-4 pt-4">
                  {languages.map((item) =>
                    item === "ENGLISH" ? (
                      <li className="text-[#666] cursor-pointer" key={item}>
                        {item}
                      </li>
                    ) : (
                      <li className="cursor-pointer" key={item}>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <div className="text-[#666]">SOCIAL</div>
                <ul className="grid grid-cols-6 gap-4  pt-4 pr-40 ">
                  {social.map((item, index) => (
                    <li key={index}>
                      <img
                        src={item.icon.w}
                        alt={item.name}
                        className="w-[25px] h-[25px]"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        }
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
            className={`absolute transition-all ease-in duration-300 flex flex-col justify-center px-6 gap-4 items-start bg-white text-black text-base right-0 h-[480px] w-1/2  ${
              isOpen2 ? "-top-[480px] border-b" : "top-0"
            } `}
          >
            {social.map((social) => (
              <li className="flex gap-3 items-center " key={social.name}>
                <img
                  src={social.icon.b}
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
