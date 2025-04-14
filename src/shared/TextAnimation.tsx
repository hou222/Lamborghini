import { motion } from "motion/react";
import { useState } from "react";
import { PiHexagonFill, PiHexagonThin } from "react-icons/pi";

type Props = {
  size: keyof typeof textS;
  title?: string;
  text?: string;
  color: string;
  shouldAnimate: boolean;
  rerun?: number;
};

const textS = {
  small:
    "   text-[40px] font-bold mb-4 lg:text-[80px] xl:text-[75px] leading-none  w-fit",
  big: " text-[40px] font-bold mb-4 lg:text-[80px] xl:text-[110px] leading-none w-fit",
};

export default function TextAnimation({
  size,
  title,
  text,
  color,
  shouldAnimate,
  rerun,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const initialProps = shouldAnimate
    ? { width: 0, opacity: 0.5 }
    : { width: "100%", opacity: 1 };

  const animateProps = shouldAnimate
    ? { width: "100%", opacity: 1 }
    : { width: "100%", opacity: 1 };

  return (
    <div>
      <motion.p
        key={`10${rerun}`}
        initial={initialProps}
        animate={animateProps}
        transition={{ duration: 2.3, ease: "easeInOut", delay: 0.7 }}
        className={`text-${color} text-xl overflow-hidden whitespace-nowrap lg:text-2xl lg:font-semibold xl:text-3xl `}
      >
        {title ? title : "READY TO GO BEYOND ?"}
      </motion.p>
      <motion.p
        key={`01${rerun}`}
        initial={shouldAnimate ? `hidden` : "visible"}
        whileInView={shouldAnimate ? "visible" : "visble"}
        transition={{ duration: 0.8, delay: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -300 },
          visible: { opacity: 1, x: 0 },
        }}
        viewport={{ once: true }}
        className={`${textS[size]} text-${color}`}
      >
        {text ? text : "FAST FORWORLD"}
      </motion.p>

      {isHovered ? (
        <PiHexagonFill
          color="white "
          className={`w-[80px] h-[80px] bg-hexa-black bg-no-repeat bg-center cursor-pointer transition-all flex justify-center items-center ${
            isHovered ? "duration-500" : "hidden"
          }`}
          onMouseLeave={() => setIsHovered(false)}
        ></PiHexagonFill>
      ) : (
        <PiHexagonThin
          color="white"
          className={`w-[80px] h-[80px] bg-hexa-white bg-no-repeat bg-center cursor-pointer transition-all duration-500${
            isHovered ? "hidden duration-500" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
        ></PiHexagonThin>
      )}
    </div>
  );
}
