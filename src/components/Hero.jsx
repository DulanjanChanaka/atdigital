import React from "react";
import hero from "../assets/unsplash.png";

function Hero() {
  return (
    <div className=" relative w-full pt-[70px]">
      <img
        src={hero}
        alt="hero"
        className="w-full object-contain"
      />
      <div
        style={{
          background: "linear-gradient(to right,#4DCA79, #1CBDDD)",
        }}
        className=" w-full px-5 py-7 lg:absolute lg:w-[670px] lg:bottom-12 lg:left-12 "
      >
        <p className="text-[36px] text-white  font-bold leading-[36px] md:text-start md:text-[48px] md:leading-[48px] lg:w-[556px]">
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <button className=" bg-[#F28D35] mt-7 rounded-[4px] w-[214px] h-[38px] text-white font-bold text-sm text-center justify-center ">
          Get free consultation
        </button>
      </div>
    </div>
  );
}

export default Hero;
