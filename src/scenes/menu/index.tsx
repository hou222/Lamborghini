import LeftWhite from "../../assets/LeftWhite.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AnimatePresence, motion, Variant } from "motion/react";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import Hexa from "../../assets/hexagon.png";
import { NavigationType } from "../../shared/types";
import { div } from "motion/react-client";

type Props = {
  navigationData: NavigationType;
  languages: string[];
  social: string[];
  hoverEff: string;
};

export default function Menu({
  navigationData,
  languages,
  social,
  hoverEff,
}: Props) {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const variants: Variant = {
    "in-view": { x: "0px", transition: { type: "tween", ease: "easeOut" } },
    "out-of-view": (index: number) => ({
      x: index > 0 ? "100%" : "-100%",
      transition: { type: "tween", ease: "easeOut" },
    }),
  };

  function goToNextLevel(item: any) {
    if (!item.links) {
      return;
    }

    setSelectedItems([...selectedItems, item.id]);
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
    <>
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
                  console.log(item);
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
                  index + 1 === selectedItems.length ? "in-view" : "out-of-view"
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
                      <img src={LeftWhite} alt="arrow up" className="w-2 h-2" />
                    </div>
                    <span>BACK</span>
                  </button>
                </li>
                {getNavItems(selectedItems.slice(0, index + 1))?.map(
                  (item: any) => {
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
              (item: any, index: number) =>
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
                {languages.map((item, index) =>
                  item === "ENGLISH" ? (
                    <li className="text-[#666] cursor-pointer">{item} </li>
                  ) : (
                    <li className="cursor-pointer">{item} </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <div className="text-[#666]">SOCIAL</div>
              <ul className="grid grid-cols-6 gap-4  pt-4 pr-40 bg-slate-600">
                {social.map((item, index) => (
                  <li>
                    <img
                      src={item.icon}
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
    </>
  );
}
