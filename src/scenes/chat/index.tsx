import { VscClose } from "react-icons/vsc";
import hexagon from "../../assets/hexagonFullBlack.png";
import { motion } from "motion/react";
type Props = {
  isOpenChat: boolean;
  handleOpenChat: () => void;
};

export default function Chat({ isOpenChat, handleOpenChat }: Props) {
  return (
    <div
      className={`flex flex-col justify-between transition-all  duration-300 fixed bottom-0 top-[60px] lg:top-[93px] right-0  transform bg-white  w-full  sm:w-2/3 md:w-1/2 lg:w-2/6 z-50 overflow-hidden ${
        !isOpenChat ? "translate-x-full" : ""
      }`}
    >
      <div className=" py-8 flex w-full justify-between px-10 border-b">
        <p className="text-xl font-semibold">ASK ME</p>
        <button aria-label="Close chat" onClick={handleOpenChat}>
          <VscClose className="w-6 h-6" />
        </button>
      </div>

      <motion.div
        className="px-4 pt-6 h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex gap-4 py-2 items-center">
          <div className="w-[70px] h-[70px]  flex justify-center items-center relative">
            <img src={hexagon} alt="hexagon" className="absolute" />
            <p className="text-white z-10">L</p>
          </div>
          <p>
            I'm Lamborghini's first Artificial Intelligence, how can I help you?
          </p>
        </div>
        <div className="flex gap-4 py-2 items-center">
          <div className="w-[70px] h-[70px]  flex justify-center items-center relative">
            <img src={hexagon} alt="hexagon" className="absolute" />
            <p className="text-white z-10">L</p>
          </div>
          <p>You can choose one of the suggestions or ask me a question</p>
        </div>
      </motion.div>
      <div className=" border-t w-full py-4   flex justify-center items-center p-4 mb-4 border-b">
        <div className=" py-4 w-full flex border-t items-center">
          <textarea
            name=""
            id=""
            className="w-full min-h-[40px] max-h-[80px] text-lg p-2 border resize-none outline-[#88e9ff] outline-4 outline-offset-2 rounded-none"
            placeholder="Hey, ask me something..."
          ></textarea>
          <button className="text-sm font-semibold px-1 h-fit py-1 hover:bg-[#d8d8d8]">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
