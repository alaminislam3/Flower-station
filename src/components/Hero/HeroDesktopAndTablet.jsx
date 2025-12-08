import { useState, useEffect } from "react";
import HeroTabs from "./HeroTabs";
import { heroData } from "./HeroData";
import logo from "../../assets/Logo/logo.png";

// PRELOAD FUNCTION
const preloadImages = (images) => {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

export default function HeroDesktopAndTablet() {
  const [active, setActive] = useState(0);
  const slide = heroData[active];

  // PRELOAD ALL IMAGES
  useEffect(() => {
    preloadImages(heroData.map(item => item.image));
  }, []);

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % heroData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen ">

      {/* Tablet = 50/50 | Desktop = 40/60 */}
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[40%_60%]">

        {/* LEFT PANEL */}
        <div
          className="lg:py-12 lg:pr-[100px] py-10 px-10 flex flex-col justify-center items-center gap-4"
          style={{ background: slide.leftBg }}
        >
          <div className="flex items-start gap-6">
            <img
              src={logo}
              alt="logo"
              className="w-20 h-20 shrink-0 hidden lg:block"
            />

            <div className="flex flex-col lg:gap-6 gap-4">
              <h1
                className="frank text-5xl font-semibold whitespace-pre-line "
                style={{ color: slide.titleColor }}
              >
                {slide.title}
              </h1>

              {/* Responsive Button */}
              <button
                style={{
                  background: slide.buttonBg,
                  color: slide.buttonTextColor,
                  borderRadius: "2px",
                }}
                className="text-lg font-medium shadow w-full lg:w-[316px] md:h-[50px]"
              >
                {slide.buttonText}
              </button>

              <p
                className="text-[15px] leading-6"
                style={{ color: slide.descColor }}
              >
                Order by 5pm for same day London* delivery <br />
                or by 3pm for next day delivery UK*
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full  lg:h-full overflow-hidden">
          <img
            src={slide.image}
            alt="hero"
            className="w-full h-full object-center"
            loading="eager"
          />

          {/* TABS */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <HeroTabs active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </div>
  );
}
