import { useState } from "react";
import TextAnimation from "../../shared/TextAnimation";
import { CarType } from "../../shared/types";

type Props = {
  cars: CarType[];
};

export default function CarModels({ cars }: Props) {
  const [car, setCar] = useState<CarType>(cars[0]);

  const hoverEff =
    "relative hover:cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-1px]";
  const selectEff =
    "relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:scale-x-100 after:transition after:duration-500 after:origin-left after:bottom-[-13px]";
  return (
    <div className="hidden  flex-col w-full h-screen py-5  lg:flex">
      <p className="text-center px-20 font-light">{car.information}</p>
      <div
        className={`  flex items-center  ${car.background}  bg-no-repeat bg-cover bg-[center_bottom_-7rem]  bg-z-[-1]  `}
      >
        {/* <div className=" relative flex items-center before:absolute  before:w-full before:h-full   before:content-temerario before:z-[-1]  before:bg-red-500"> */}
        <div className="w-2/5 h-fit flex flex-col gap-10 items-start justify-center pl-24">
          <TextAnimation
            size="small"
            title={car.title}
            text={car.text}
            color="black"
            shouldAnimate={true}
          />
          <div className=" w-fit  text-black flex text-xl border-b font-light  ">
            {cars.map((item: CarType) => (
              <button
                className={` pr-20  py-3 ${hoverEff} ${
                  car.id === item.id ? selectEff : ""
                }`}
                key={item.name}
                onClick={() => setCar(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-3/5 flex items-end ">
          <img src={car.image} alt="car" className="h-[560px]" />
          {/* <img src={huracan} alt="car" /> */}
        </div>
      </div>
      <p className="text-center px-20 font-light">{car.information}</p>
    </div>
  );
}
