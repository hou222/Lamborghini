import { Fade, SlideshowRef } from "react-slideshow-image";
import mp4 from "../../assets/Gintani Equipped Lamborghini Aventador SVJ  _ 4K(480P).webm";
import mp42 from "../../assets/Lamborghini2.webm";
import { useRef, useState } from "react";
import TextAnimation from "../../shared/TextAnimation";

export default function VideoSlide() {
  const [select, setSelect] = useState<number>(0);
  const ref = useRef<SlideshowRef | null>(null);
  //const [isLoading, setIsLoading] = useState(false);
  //const ref = useRef();
  const videos = [
    {
      video: mp4,
      caption: 0,
      title: "THE RED ZONE WITH CALDARELLI",
      text: "TEMERARIO: BEYOND THE LIMIT",
      label: "first video",
    },
    {
      video: mp42,
      caption: 1,
      title: "READY TO GO BEYOND ?",
      text: "FAST FORWORLD",
      label: "second video",
    },
  ];

  /* useEffect(() => {
    const video = videoRef.current;
  }, []); */

  function handleMoves(val: number) {
    if (select < val) {
      ref.current?.goNext();
    } else if (select > val) {
      ref.current?.goBack();
    }
    setSelect(val);
  }

  return (
    <div>
      <Fade arrows={false} autoplay={false} ref={ref}>
        {videos.map((video, index) => (
          <div key={index}>
            <video
              /* ref={ref} */
              autoPlay={true}
              loop={true}
              muted={true}
              className="w-full h-screen z-10 bg-cover object-cover relative "
            >
              <source src={video.video} type="video/mp4" />
            </video>
            <div className="absolute  top-0 z-10 w-full  px-4 md:px-24 h-full pt-40 xl:pt-56 xl:px-28">
              <TextAnimation
                rerun={select}
                size={"big"}
                color="white"
                shouldAnimate={true}
                text={video.text}
                title={video.title}
              />
              <div className=" absolute bottom-0 right-0 left-0 flex justify-center items-center gap-3 py-10 lg:justify-start lg:px-24 xl:px-28">
                {videos.map((_, index) => (
                  <button
                    aria-label={video.label}
                    key={index}
                    className={`w-[60px] h-4 relative after:block after:content-[''] after:absolute  after:w-full after:bottom-0 after:transition-all after:duration-200 ${
                      select === index
                        ? "after:h-[3px] after:bg-white"
                        : "after:h-[1px] after:bg-[#ffffff7f]"
                    }`}
                    onClick={() => handleMoves(index)}
                  >
                    <span></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
