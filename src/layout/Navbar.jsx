import React, { useState } from "react";
import Navlogo from "../assets/Logo.png";
import Menu from "../assets/menu.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#6B3CC9] w-full flex flex-row justify-between items-center fixed md:h-[77px] h-[77px] z-[50]">
      <img src={Navlogo} alt="logo" className="h-[25px] object-contain w-[238.89px]" />
      <img src={Menu} onClick={handleMenuClick} alt="menu" className="w-[31px] h-[24px] object-contain md:hidden mr-5" />
      <ul className="hidden md:flex font-[500] text-[14px] md:flex-row text-center gap-10 text-white mr-10">
        <li>SERVICES</li>
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>CAREERS</li>
      </ul>
      <div className={
        isMenuOpen
          ? ' fixed left-0 top-[77px] w-full  bg-[#6B3CC9] ease-in duration-500'
          : '  top-[77px] hidden  ease-in duration-500'
      }>
        <div className='py-4 flex flex-col text-center leading-10'>
          <ul className='text-white'>
            <Link href='/' onClick={() => setMenuOpen(false)}><li >SERVICES</li></Link>
            <Link href='/' onClick={() => setMenuOpen(false)}><li >ABOUT US</li></Link>
            <Link href='/' onClick={() => setMenuOpen(false)}><li >CONTACT US</li></Link>
            <Link href='/' onClick={() => setMenuOpen(false)}><li >CAREERS</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



