import Hexa from "../assets/hexagon.png";
import UpWhite from "../assets/UpWhite.png";
import UpBlack from "../assets/UpBlack.png";
import React from "react";

type Props = {
  children: React.ReactNode;
  handleOpen: () => void;
  isOpen: boolean;
};

export default function BottomMenuButton({
  children,
  handleOpen,
  isOpen,
}: Props) {
  return (
    <button
      className={`${
        isOpen
          ? "bg-white text-black "
          : " border border-[#ffffff40] bg-black delay-300"
      } w-1/2 flex h-16 justify-start z-40 items-center gap-2 px-6 `}
      onClick={handleOpen}
    >
      <div
        className="w-[29px] h-[29px]  flex justify-center items-center relative 
  "
      >
        {isOpen ? (
          <img src={UpBlack} alt="arrow up" className="w-2 h-2" />
        ) : (
          <>
            <img src={Hexa} alt="hexagonal shape" className="absolute" />
            <img src={UpWhite} alt="arrow up" className="w-2 h-2" />
          </>
        )}
      </div>
      {children}
    </button>
  );
}
