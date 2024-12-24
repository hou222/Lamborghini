import Lambo from "./assets/Lamborghini.png";
import Message from "./assets/Message.png";
import Search from "./assets/Search.png";

function App() {
  return (
    <div>
      <header className="bg-black flex justify-between px-4 p-2">
        {/* <div className="w-8 h-8 bg-white"></div> */}
        <img src={Lambo} alt="Lamborghini Icon" className="w-11 h-11" />
        <div className="flex gap-7 items-center">
          <img src={Message} alt="Message Icon" className="w-8 h-8" />
          <img src={Search} alt="Search Icon" className="w-6 h-6" />

          <button className=" ">
            <div className="flex flex-col  gap-1.5 w-8 h-8 justify-center p-0.5 lg:hidden">
              <div className=" bg-white w-full h-[0.05rem]"></div>
              <div className=" bg-white w-full h-[0.05rem]"></div>
              <div className=" bg-white w-full h-[0.05rem]"></div>
            </div>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
