import { useEffect, useRef, useState } from "react";
import Lambo from "../../assets/Lamborghini.png";
import Message from "../../assets/Message.png";
import SearchIcon from "../../assets/Search.png";

import Navbar from "../navbar";
import Search from "../search";
import Chat from "../chat";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [height, setHeight] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [setHeight]);

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
        className="bg-[#181818] w-full flex justify-between items-center px-4  py-2 lg:py-4 xl:px-[60px] transition-all duration-300 fixed top-0 left-0 right-0 z-20 "
      >
        <img
          src={Lambo}
          alt="Lamborghini Icon"
          className="w-11 h-11 lg:w-[61px] lg:h-[61px] lg:mr-5"
        />
        <Navbar />
        <div className="w-[150px] h-fit flex justify-between items-center">
          <button onClick={handleOpenChat}>
            <img src={Message} alt="Message Icon" className="w-8 h-8" />
          </button>

          <button onClick={handleOpenSearch} disabled={isOpen || isOpenSearch}>
            <img src={SearchIcon} alt="Search Icon" className="w-6 h-6" />
          </button>

          <button
            className={`w-8 h-7 flex justify-center items-center focus:ring-1 ring-white rounded-sm focus:bg-[#373737] `}
            onClick={handleOpen}
            disabled={isOpenSearch}
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
      <Chat isOpenChat={isOpenChat} height={height} />
      <Navbar isOpen={isOpen} />
      <Search isOpenSearch={isOpenSearch} handleOpenSearch={handleOpenSearch} />
    </header>
  );
}
