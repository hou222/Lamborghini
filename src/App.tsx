import { useState } from "react";
import Lambo from "./assets/Lamborghini.png";
import Message from "./assets/Message.png";
import Search from "./assets/Search.png";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <header>
        <div className="bg-black flex justify-between px-4 p-2">
          <img src={Lambo} alt="Lamborghini Icon" className="w-11 h-11" />
          <ul className="text-white hidden lg:flex">
            <li>MODELS</li>
            <li>BEYOND</li>
            <li>WONERSHIP</li>
            <li>MOTOSPORT</li>
          </ul>
          <ul className="text-white hidden lg:flex">
            <li>DEALERSHIPS</li>
            <li>MUSEUM</li>
            <li>STORE</li>
          </ul>

          <div className="flex gap-7 items-center">
            <img src={Message} alt="Message Icon" className="w-8 h-8" />
            <img src={Search} alt="Search Icon" className="w-6 h-6" />

            {!isOpen ? (
              <button className=" ">
                <div className="flex flex-col  gap-1.5 w-8 h-8 justify-center p-0.5">
                  <div className=" bg-white w-full h-[0.05rem]"></div>
                  <div className=" bg-white w-full h-[0.05rem]"></div>
                  <div className=" bg-white w-full h-[0.05rem]"></div>
                </div>
              </button>
            ) : (
              <button className=" ">
                <div className=" w-8 h-8 relative">
                  <div className=" bg-white w-full h-[0.05rem] absolute top-0 bottom-0 my-auto rotate-45"></div>

                  <div className=" bg-white w-full h-[0.05rem] absolute top-0 bottom-0 my-auto -rotate-45"></div>
                </div>
              </button>
            )}
          </div>
        </div>
        {isOpen && (
          <ul className="bg-black text-white">
            <li>MODELS</li>
            <li>BEYOND</li>
            <li>WONERSHIP</li>
            <li>MOTOSPORT</li>

            <li>DEALERSHIPS</li>
            <li>MUSEUM</li>
            <li>STORE</li>
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
