import React from "react";
import icon from "../assets/main_logo.png";
import travel from "../assets/travel.svg";
const Header = () => {
  return (
    <div className="header flex flex-col mt-[30px]">
      <div className="header-left flex justify-center">
        {/* <img src={icon} className="h-[50px]" alt="" /> */}

        <div className="title flex flex-col px-[20px]">
            <h3 className="text-black font-semibold text-[20px]">Never Stop</h3>
        <h1 className="text-3xl font-bold text-green-700 font-sans animate-pulse">EXPLORING</h1>
        <p className="text-black text-[12px] font-semibold">
          <span className="font-bold text-red-800">Budget Travels:</span> Your gateway to affordable adventures, offering
          budget-friendly packages to make unforgettable memories accessible to
          all
        </p>
        <div className="button pt-[10px]">
            <button className="bg-black p-2 px-3 rounded-xl shadow-md shadow-neutral-500">Book Now</button>
        </div>
        </div>
       
      </div>
      <div className="header-right flex justify-center">
        <img src={travel} className="w-30px h-[220px]" alt="" />
      </div>
    </div>
  );
};

export default Header;
