import { BiSearch } from "react-icons/bi";

type Props = {
  isOpenSearch: boolean;
  handleOpenSearch: () => void;
};

export default function Search({ isOpenSearch, handleOpenSearch }: Props) {
  return (
    <div
      className={`text-white bg-[#181818] fixed h-screen lg:h-screen lg:pb-10    transition-all ease-out duration-700 right-0  left-0 flex  items-center  ${
        isOpenSearch ? "top-0 pt-14" : "-top-[100%]"
      } `}
    >
      <div className="w-full  text-xl px-4">
        <button
          className="text-end w-full tracking-tight"
          onClick={handleOpenSearch}
        >
          CLOSE SEARCH X
        </button>
        <p className="text-[15px] font-bold tracking-tight">LAMBORGHINI</p>
        <p className="text-4xl font-bold tracking-tight leading-[0.9]">
          SEARCH IN THE WEBSITE
        </p>
        <div className="flex py-20  items-center">
          <input
            type="text"
            className="bg-black text-white italic w-full outline-none py-2 text-2xl"
            placeholder="Search on Lamborghini.com"
          />
          <BiSearch className="w-9 h-9" />
        </div>
      </div>
    </div>
  );
}
