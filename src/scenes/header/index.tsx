import { useRef, useState } from "react";
import Lambo from "../../assets/Lamborghini.png";
import Message from "../../assets/Message.png";
import SearchIcon from "../../assets/Search.png";

import Navbar from "../navbar";
import Search from "../search";
import Chat from "../chat";
import Menu from "../menu";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const ref = useRef(null);
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

  function handleOpen() {
    setIsOpenSearch(false);
    setIsOpen((isOpen) => !isOpen);
  }
  function handleOpenSearch() {
    setIsOpen(false);
    setIsOpenSearch((isOpen) => !isOpen);
  }
  function handleOpenChat() {
    setIsOpen(false);
    setIsOpenSearch(false);
    setIsOpenChat((isOpen) => !isOpen);
  }
  return (
    <header>
      <div
        ref={ref}
        className="bg-[#181818] w-full h-[60px] lg:h-[93px] flex justify-between items-center px-4  py-2 lg:py-4 xl:px-[60px] transition-all duration-300 fixed top-0 left-0 right-0 z-30 "
      >
        <img
          src={Lambo}
          alt="Lamborghini Icon"
          className="w-11 h-11 lg:w-[61px] lg:h-[61px] lg:mr-5"
        />
        <Navbar navigationData={navigationData} />
        <div className="w-[150px] h-fit flex justify-between items-center">
          <button
            onClick={handleOpenChat}
            disabled={isOpenChat || isOpen || isOpenSearch}
          >
            <img src={Message} alt="Message Icon" className="w-8 h-8" />
          </button>

          <button
            onClick={handleOpenSearch}
            disabled={isOpen || isOpenSearch || isOpenChat}
          >
            <img src={SearchIcon} alt="Search Icon" className="w-6 h-6" />
          </button>

          <button
            className={`w-8 h-7 flex justify-center items-center focus:ring-1 ring-white rounded-sm focus:bg-[#373737] `}
            onClick={handleOpen}
            disabled={isOpenSearch || isOpenChat}
          >
            <div className="w-6 h-4 relative">
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
        </div>
      </div>
      <Chat isOpenChat={isOpenChat} handleOpenChat={handleOpenChat} />
      <Menu navigationData={navigationData} isOpen={isOpen} />
      <Search isOpenSearch={isOpenSearch} handleOpenSearch={handleOpenSearch} />
    </header>
  );
}
