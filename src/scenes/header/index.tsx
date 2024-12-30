import { useState } from "react";
import Lambo from "../../assets/Lamborghini.png";
import Message from "../../assets/Message.png";
import Search from "../../assets/Search.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <header>
      <div className="bg-black flex justify-between px-4 p-2 fixed top-0 left-0 right-0 z-20">
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

          {/* {!isOpen ? ( */}
          <button
            className={`w-8 h-7   flex justify-center items-center border  ${
              isOpen ? "" : ""
            }`}
            onClick={handleOpen}
          >
            <div className="w-6 h-5  flex flex-col justify-between items-center   relative">
              <div
                className={`${
                  isOpen && " rotate-45 absolute top-0 bottom-0 my-auto"
                } bg-white w-full h-[0.05rem]    transition-all duration-700 `}
              ></div>
              <div
                className={`${
                  isOpen && "opacity-0"
                } bg-white w-full h-[0.05rem] transition-all duration-700`}
              ></div>
              <div
                className={`${
                  isOpen && "  -rotate-45 absolute top-0 bottom-0 my-auto"
                } bg-white w-full h-[0.05rem]  transition-all duration-700 `}
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
        className={`bg-black text-white px-6 text-2xl font-semibold fixed h-full flex flex-col transition-all ease-in duration-500 right-0 left-0 ${
          isOpen ? "top-0   pt-14" : "-top-[100%]"
        }`}
      >
        <ul className={` flex flex-col pt-14 gap-4 overflow-auto `}>
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
        <div className="flex bg-blue-500 justify-between">
          <div className="h-16 bg-yellow-600 w-full flex justify-center items-center">
            ENGLISH
          </div>
          <div className="bg-gray-500 w-full flex justify-center items-center">
            SOCIAL
          </div>
        </div>
      </nav>
    </header>
  );
}
