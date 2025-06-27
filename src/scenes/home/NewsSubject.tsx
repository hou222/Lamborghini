import lambo1 from "../../assets/Lamobo-mountain.png";

export default function NewsSubject() {
  return (
    <div>
      <div className="px-4 pt-28 pb-10 bg-[#F8F8F7] lg:px-20 2xl:px-36">
        {/* <div className="hidden lg:block">
          <div className="bg-black text-white">ljkljkl / kljljklj / kkljkl</div>
        </div> */}
        <p className="text-[20px]  lg:font-semibold lg:text-[34px]">NEWS</p>
        <div>
          <p className="text-[30px] leading-none py-6 font-bold lg:text-[80px] 2xl:text-[110px]">
            Andrea Caldarelli pushes the new Temerario to the limit
          </p>
          <img src={lambo1} alt="lamborghini wallpaper" />
        </div>
      </div>
      <div className=" pt-10 flex flex-col gap-4   ">
        <p className="font-light text-lg px-4 lg:px-20 2xl:px-36">
          12 MARCH 2025
        </p>
        <p className="bg-[#F8F8F7] w-fit px-2 mx-4 lg:mx-20 2xl:mx-36">
          BRAND EXTENSION
        </p>
        <div className="py-16 px-4 lg:px-20 2xl:px-36">
          <p>For press content visit Lamborghini Media Center</p>
        </div>
        <p className="px-4 lg:px-20 2xl:px-36 bg-[#F8F8F7]">
          Combined energy consumption: 10,1 kWh/100 Km plus 11,86 l/100km;
          Combined CO2 emissions: 276 g/km; Combined CO2 efficiency class: G;
          CO2 class with discharged battery: G; Combined fuel consumption with
          discharged battery: 17,8 l/100km
        </p>
        <div className="bg-[#F8F8F7] flex flex-col gap-4 py-14 lg:flex-row px-4 lg:px-20 2xl:px-36">
          <img src={lambo1} alt="lambo" className="lg:w-1/2" />
          <div className=" lg:flex lg:flex-col lg:gap-3 lg:items-start font-light">
            <p>
              We are pleased to introduce you the new Ducati Panigale V4
              Lamborghini, the motorbike born from the collaboration between the
              Italian motorcycle and super sports car manufacturers, has been
              unveiled to the public. The presentation event – The Art of
              Unexpected – took place in Teatro Alcione, Milan, during Milan
              Design Week, the leading event in the design world, where the two
              automotive companies excel.
            </p>
            <p className="my-8 font-normal">
              The Ducati – Lamborghini collaboration
            </p>
            <p>
              This opens the third chapter in the partnership between Ducati and
              Lamborghini, two symbolic companies of Italy as a whole, which
              share the same values of sophisticated technology, sportiness and
              exclusivity. Two iconic brands which represent Italian excellence
              on a world level, both rooted in the heart of the Emilia region's
              Motor Valley, where passion, ingenuity and expertise come
              together, giving rise to works of art on two and four wheels such
              as the new Ducati Panigale V4 Lamborghini: the result of a
              combination that will once again become every enthusiast’s dream
              at first sight, bringing together technology, performance and
              beauty as previously happened with the Ducati Streetfighter V4
              Lamborghini and the Diavel 1260 Lamborghini. This new episode of
              the union between the two companies stars the most
              high-performance and sophisticated models in the ranges of the two
              brands: the Panigale V4 S, the latest generation Ducati Superbike;
              and the Lamborghini Revuelto, the new paradigm in the super sports
              car arena. Both models represent the ultimate expression of
              sporting performance of the two brands and are equipped with the
              most refined and high-performance engines, that fully represent
              their technical philosophy and design approach: the Ducati
              Desmosedici Stradale and the Lamborghini V12.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
