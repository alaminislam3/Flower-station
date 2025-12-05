import "./App.css";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
function App() {
  return (
    <div className="open-sans bg-[#FFF4EE] text-black">
      <div className="flex justify-between items-center mx-12 py-2.5">
        <div className="flex items-center gap-5 text-black text-xl">
          <FaInstagram className="cursor-pointer " />
          <FaFacebookF className="cursor-pointer " />
          <FaPinterest className="cursor-pointer " />
          <BiSolidPhoneCall className="cursor-pointer " />
          <FaLinkedinIn className="cursor-pointer " />
          <IoIosMail className="cursor-pointer " />
        </div>

        <p className=" text-xs font-normal">
          {" "}
          {/* mr-[248px] */} we deliver the same day in London, even on Sundays
        </p>
        <div className="flex font-normal text-[14px]">
          <p>Delivery |</p>
          <p>Find a store |</p>
          <p> FAQs |</p>
          <p> Sign in</p>
        </div>
      </div>
    </div>
  );
}

export default App;
