import HeroDesktopAndLaptop from "./HeroDesktopAndTablet";
import HeroMobile from "./HeroMobile";
export default function Hero() {
  return (
    <>
      {/* Desktop and tablet */}
      <div className="hidden md:block">
        <HeroDesktopAndLaptop />
      </div>
      {/* Mobile */}
      <div className="block md:hidden">
        <HeroMobile />
      </div>
    </>
  );
}
