import { useState } from "react";
import Lambo from "../../assets/Lamborghini.png";
import Message from "../../assets/Message.png";
import Search from "../../assets/Search.png";

import Navbar from "../navbar";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <header>
      <div className="bg-black  flex justify-between px-4 p-2 fixed top-0 left-0 right-0 z-20">
        <img src={Lambo} alt="Lamborghini Icon" className="w-11 h-11" />
        <Navbar />
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
      <Navbar isOpen={isOpen} />
    </header>
  );
}
