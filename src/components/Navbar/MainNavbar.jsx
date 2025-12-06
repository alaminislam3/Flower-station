import fire from '../../assets/navabar/fire.png';
import tree from '../../assets/navabar/tree.png';
import sunFlower from '../../assets/navabar/sunflower.png';
import giftCard from '../../assets/navabar/gift-card.png';
import Cart from '../../assets/navabar/cart.png';
import Search from '../../assets/navabar/search.png';

/* Tablet and phone react icons  */
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import cart from "../../assets/navabar/cart.png"
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/Logo/logo.png"

function MainNavbar() {
  return (
    <div className="open-sans bg-white text-black">
      {/* Desktop screen */}
      <div className="hidden lg:h-14 lg:flex justify-between items-center mx-12 py-2.5">
        
        {/* Left menu */}
        <div className="flex justify-between items-center gap-4 text-[14px]">
          <p>Flowers</p>

          {/* Trending with fire image */}
          <p className="flex items-center gap-[5px]">
            Trending 
            <img src={fire} alt="fire" className="w-4 h-4" />
          </p>

          {/* Christmas with tree image */}
          <p className="flex items-center gap-[5px]">
            Christmas Trees
            <img src={tree} alt="tree" className="w-4 h-4" />
          </p>

          <p>Gifts</p>

          {/* Sale with sunflower image */}
          <p className="flex items-center gap-[5px]">
            Sale
            <img src={sunFlower} alt="sunflower" className="w-4 h-4" />
          </p>

          <p>Luxury</p>
          <p>Letterbox Flowers</p>
          <p>Plants</p>

          {/* Gift Card with giftbox image */}
          <p className="flex items-center gap-[5px]">
            Gift Card
            <img src={giftCard} alt="gift card" className="w-4 h-4" />
          </p>

          <p>Funeral</p>
          <p>Wedding & Events</p>
          <p>School</p>
        </div>

        {/* Right menu */}
        <div className="flex justify-between items-center gap-2.5 text-[14px]">
          {/* Cart with image + count */}
          <div className="flex items-center gap-[5px] cursor-pointer">
            <img src={Cart} alt="cart" className="w-5 h-5" />
            
          </div>

          {/* Search icon */}
          <div className="cursor-pointer">
            <img src={Search} alt="search" className="w-5 h-5" />
          </div>
        </div>
      </div>





      {/* Tablet and mobile screen */}
      <div className="block lg:hidden my-10 mx-4">
      <div className="flex justify-between items-center">
        
        {/* Left: Hamburger + Profile */}
        <div className="flex items-center gap-5">
          <RxHamburgerMenu className="text-2xl cursor-pointer" />
          <CgProfile className="text-2xl cursor-pointer" />
        </div>

        {/* Center: Logo */}
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-12 object-contain" />
        </div>

        {/* Right: Cart + Search */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-[5px] cursor-pointer">
            <img src={cart} alt="Cart" className="w-6 h-6" />
            <span className="text-sm font-semibold">0</span>
          </div>
          <IoIosSearch className="text-2xl cursor-pointer" />
        </div>

      </div>
    </div>
    </div>
  );
}

export default MainNavbar;
