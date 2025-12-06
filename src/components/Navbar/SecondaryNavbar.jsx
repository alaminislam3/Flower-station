
import {
  FaInstagram,
  FaFacebookF,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";

function SecondaryNavbar() {
  return (
    <div className="open-sans bg-[#FFF4EE] text-black">
      {/* ----------- DESKTOP VERSION (lg) ----------- */}
      <div className="hidden lg:h-10 lg:flex justify-between items-center mx-12 py-2.5">
        {/* Left Icons */}
        <div className="flex items-center gap-5 text-black text-xl">
          <FaInstagram className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaPinterest className="cursor-pointer" />
          <BiSolidPhoneCall className="cursor-pointer" />
          <FaLinkedinIn className="cursor-pointer" />
          <IoIosMail className="cursor-pointer" />
        </div>

        {/* Middle Text */}
        <p className="text-xs font-normal">
          we deliver the same day in London, even on Sundays
        </p>

        {/* Right Links */}
        <div className="flex font-normal text-[14px] gap-2">
          <p className="cursor-pointer">Delivery |</p>
          <p className="cursor-pointer">Find a store |</p>
          <p className="cursor-pointer">FAQs |</p>
          <p className="cursor-pointer">Sign in</p>
        </div>
      </div>

      {/* ----------- TABLET + MOBILE VERSION ----------- */}
      <div className="flex lg:hidden justify-center items-center px-4 text-center h-[30px] md:h-[30px]">
        {/* Mobile (sm) text */}
        <p className="text-xs font-normal block md:hidden">
          Same day delivery london & Next day UK
        </p>

        {/* Tablet (md) text */}
        <p className="text-[14px] font-normal hidden md:block">
          we deliver the same day in London, even on Sundays
        </p>
      </div>
    </div>
  );
}

export default SecondaryNavbar;
