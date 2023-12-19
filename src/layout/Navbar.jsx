import React from "react";
import Navlogo from "../assets/Logo.png";
import Menu from "../assets/menu.png";

function Navbar() {
  return (
    <div className="bg-[#6B3CC9] w-full flex flex-row justify-between items-center fixed md:h-[77px] h-[77px] z-[50]">
  <img src={Navlogo} alt="logo" className="h-[25px] object-contain w-[238.89px]" />
  <img src={Menu} alt="menu" className="w-[31px] h-[24px] object-contain md:hidden mr-5" />
  <ul className="hidden md:flex font-[500] text-[14px] md:flex-row text-center gap-10 text-white mr-10">
    <li>SERVICES</li>
    <li>ABOUT US</li>
    <li>CONTACT US</li>
    <li>CAREERS</li>
  </ul>
</div>

  );
}

export default Navbar;


