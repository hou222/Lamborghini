import { useState } from "react";
import Lambo from "../../assets/Lamborghini.png";
import Message from "../../assets/Message.png";
import Search from "../../assets/Search.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <header>
      <div className="bg-black flex justify-between px-4 p-2 sticky top-0 left-0 right-0">
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
            className="w-8 h-5 relative flex justify-center items-center overflow-hidden"
            onClick={handleOpen}
          >
            <div
              className={` ${
                !isOpen ? "flex flex-col  gap-1.5  justify-center p-0.5" : ""
              }`}
            >
              <div
                className={`${
                  isOpen && " rotate-45 "
                } bg-white w-8 h-[0.05rem] absolute top-0  transition-all duration-700 origin-left`}
              ></div>
              <div
                className={`${
                  isOpen && "opacity-0"
                } bg-white w-8 h-[0.05rem] transition-all duration-700`}
              ></div>
              <div
                className={`${
                  isOpen && "  -rotate-45 "
                } bg-white w-8 h-[0.05rem] absolute  bottom-0 transition-all duration-700 origin-left`}
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
      <nav>
        <ul
          className={`bg-black text-white px-6 text-2xl font-semibold  flex flex-col gap-4 transition-all ease-in-out duration-700 overflow-hidden  z-30 ${
            isOpen ? "h-screen pt-14" : "h-0"
          } `}
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
      </nav>
    </header>
  );
}
