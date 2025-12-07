import { useState } from "react";
import HeroTabs from "./HeroTabs";
import { heroData } from "./HeroData";
import logo from "../../assets/Logo/logo.png"


export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroData[active];

  // Auto-change tabs every 3 seconds
 /*  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % heroData.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []); */

  return (
    <div className="relative w-full h-[382px]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">

        {/* LEFT PANEL */}
        <div
          className="p-10 flex flex-col justify-center items-start gap-4 h-[382px]"
          style={{ background: slide.leftBg }}
        >
          <div className="flex items-start gap-6">
            {/* Logo */}
            <img src={logo} alt="logo" className="w-20 h-20 shrink-0 hidden lg:block" />

            {/* Title, Button and Text */}
            <div className="flex flex-col gap-4">
              {/* Title */}
              <h1 
                className="frank text-4xl font-semibold whitespace-pre-line leading-snug"
                style={{ color: slide.titleColor }}
              >
                {slide.title}
              </h1>

              {/* Button */}
              <button
                style={{
                  background: slide.buttonBg,
                  color: slide.buttonTextColor,
                  width: '316px',
                  height: '50px',
                  borderRadius: '2px'
                }}
                className="text-lg font-medium shadow"
              >
                {slide.buttonText}
              </button>

              {/* Common text */}
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
        <div className="relative h-[382px] overflow-hidden w-full  lg:w-full">
          <img
            src={slide.image}
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
          
          {/* TABS ON IMAGE */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <HeroTabs active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </div>
  );
}