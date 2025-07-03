import lambo1 from "../../assets/Lamobo-mountain.png";
import lambo2 from "../../assets/lambo2.png";

export default function NewsSection() {
  return (
    <div>
      <div className="px-4 pt-20 pb-10 bg-[#F8F8F7] lg:px-20 2xl:px-36">
        <p className="text-[30px] font-semibold lg:font-bold lg:text-[34px]">
          NEWS
        </p>
        <div>
          <p className="text-[45px] leading-none py-6 font-bold lg:text-[100px] 2xl:text-[110px]">
            LAMBORGHINI WORLD
          </p>
          <img
            src={lambo1}
            width={1587}
            height={682}
            alt="lamborghini wallpaper"
          />
        </div>
      </div>
      <div className="px-4 pt-10 flex flex-col gap-4 lg:px-20 2xl:px-36">
        <p className="font-semibold text-lg ">12 MARCH 2025</p>
        <p className="bg-[#F8F8F7] w-fit px-2">EVENTS</p>
        <p className="font-bold text-3xl ">
          A LAMBORGHINI GATEWAY TO COURCHEVEL
        </p>
        <p>
          Combined energy consumption: 10,1 kWh/100 Km plus 11,86 l/100km;
          Combined CO2 emissions: 276 g/km; Combined CO2 efficiency class: G;
          CO2 class with discharged battery: G; Combined fuel consumption with
          discharged battery: 17,8 l/100km
        </p>
        <div className="flex flex-col gap-4 py-14 lg:flex-row">
          <img
            src={lambo2}
            width={792}
            height={321}
            alt="lambo"
            className="lg:w-1/2"
          />
          <div className=" lg:flex lg:flex-col lg:gap-3 lg:items-start">
            <p className="font-semibold text-lg lg:font-thin">6 March 2025</p>

            <p className="font-bold text-3xl ">The new V8 Biturbo</p>
            <p>
              The vehicle is not yet offered for sale and is therefore not
              subject to Directive 1999/94/EC. The fuel consumption and
              emissions data is in the type approval stage
            </p>
            <button className="hidden lg:inline px-16 py-4 border border-[#c2c2c2]">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
