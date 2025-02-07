import { VscClose } from "react-icons/vsc";

type Props = {
  isOpenChat: boolean;
  height: number;
};

export default function Chat({ isOpenChat, height }: Props) {
  console.log(height);
  return (
    <div
      className={`flex flex-col justify-between transition-all  duration-300 fixed h-full top-[${height}px] right-0  transform  w-full bg-white sm:w-2/3 md:w-1/2 lg:w-2/6 z-50 ${
        isOpenChat ? "translate-x-full" : ""
      }`}
    >
      <div className="fixed top-0 right-0 left-0 py-8 flex justify-between px-10 border-b">
        <p className="text-xl font-semibold">ASK ME</p>
        <VscClose className="w-6 h-6" />
      </div>
    </div>
  );
}
