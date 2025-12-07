import { useState } from "react";
import { heroData } from "./HeroData";
import HeroTabs from "./HeroTabs";
export default function HeroMobile() {
  const [active, setActive] = useState(0);
  const slide = heroData[active];

  const categories = [
    { name: "All Flowers", image: "/src/assets/Mobile slider/1.png" },
    { name: "Birthday", image: "/src/assets/Mobile slider/2.png" },
    { name: "Virtues Flowers", image: "/src/assets/Mobile slider/3.png" },
    { name: "Luxury", image: "/src/assets/Mobile slider/4.png" },
    { name: "Letter", image: "/src/assets/Mobile slider/5.avif" },
    { name: "Get Well", image: "/src/assets/Mobile slider/6.jpg" },
    { name: "Sale", image: "/src/assets/Mobile slider/5.avif" },
    { name: "Anniversary", image: "/src/assets/Mobile slider/6.jpg" },
    { name: "Ecuadorian", image: "/src/assets/Mobile slider/7.jpg" },
    { name: "Gifting", image: "/src/assets/Mobile slider/8.webp" },
  ];

  return (
    <div className="w-full">
      {/* Flower Categories */}
      <div className="bg-white py-3 px-3 overflow-x-auto">
        <div className="flex gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center min-w-[70px]">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-[72px] h-full object-cover"
                />
              </div>
              <span className="text-xs text-gray-700 whitespace-nowrap">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative w-full h-[280px]">
        <img
          src={slide.image}
          alt="hero"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay with 50% opacity */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col  items-center">
          {/* Fixed White Title */}
          <h1 className="frank text-[32px] font-semibold whitespace-pre-line text-white relative z-10 mt-[37px]">
            {slide.title}
          </h1>

          {/* Always White Button */}
          <button className="w-[200px] py-3 px-6 rounded font-semibold shadow bg-white text-black relative z-10">
             All Flowers
          </button>

          {/* Tabs BELOW button *inside the hero image* */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 sm:px-0 sm:w-auto ">
            <HeroTabs active={active} setActive={setActive} />
          </div>
        </div>
      </div>
    </div>
  );
}
