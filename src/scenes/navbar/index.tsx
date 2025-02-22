import { NavigationType } from "../../shared/types";

type Props = {
  navigationData: NavigationType[];
};

export default function Navbar({ navigationData }: Props) {
  const hoverEff =
    "relative hover:cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:mt-1 ";

  return (
    <nav className="lg:grow">
      <div className=" hidden lg:flex justify-between items-center h-full px-5 xl:pl-8 xl:pr-12 text-sm font-light xl:text-base transition-all ">
        <ul className="text-white hidden lg:flex gap-2 xl:gap-6 ">
          {navigationData.map((item, index) =>
            index < 4 ? (
              <li className={hoverEff} key={item.label}>
                {item.label}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <ul className="text-white gap-2 hidden lg:flex xl:gap-6">
          {navigationData.map((item, index) =>
            index >= 4 && index < 7 ? (
              <li className={hoverEff} key={index}>
                {item.label}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
