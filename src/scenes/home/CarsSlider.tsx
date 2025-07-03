import Slider from "react-slick";
import { CarType } from "../../shared/types";
import { useState } from "react";

type Props = {
  cars: CarType[];
};
export default function CarsSlider({ cars }: Props) {
  const [slideCar, setSlideCar] = useState<number>(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    afterChange: (current: number) => {
      setSlideCar(current);
    },
  };
  return (
    <div className="w-full py-7  lg:hidden">
      <p className="text-[30px] font-semibold px-4">MODELS</p>

      <Slider {...settings}>
        {cars.map((car) => (
          <div
            key={car.id}
            className="w-[300px] sm:w-[400px] md:w-[530px] h-[200px] sm:h-[300px] md:h-[350px] bg-gradient-to-t from-white via-gray-300 to-white"
          >
            <img
              src={car.image}
              width={car.width}
              height={car.height}
              alt={car.name}
              className="w-[300px] sm:w-[400px] md:w-[530px]"
            />
          </div>
        ))}
      </Slider>
      <div>
        <div className="px-4 flex flex-col items-start gap-2">
          <p className="text-4xl font-bold">{cars[slideCar].name}</p>
          <p className="text-lg font-semibold">You can't hide who you are</p>
          <button className=" px-16 py-2 w-full border border-[#c2c2c2]">
            EXPLORE THE MODEL
          </button>
          <button className=" px-16 py-2 w-full border border-[#c2c2c2]">
            OPEN CAR CONFIGURATOR
          </button>
          <p className="text-center font-light py-2">
            {cars[slideCar].information}
          </p>
        </div>
      </div>
    </div>
  );
}
