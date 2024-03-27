import React from "react";
import icon from "../assets/main_logo.png";
import travel from "../assets/travel.svg";
import { ImLocation } from "react-icons/im";
const Header = () => {
  return (
    <div
      className="header flex flex-col mt-[30px] lg:flex lg:flex-row lg:justify-center lg:mb-[60px] lg:pt-[40px] lg:pb-[40px]"
      id="Home"
    >
      <div className="header-left flex justify-center">
        <div className="title flex flex-col px-[20px]">
          <h3 className="text-black font-semibold text-[20px]">Never Stop</h3>
          <h1 className="text-3xl font-bold text-green-700 font-sans ">
            EXPLORING
          </h1>
          <p className="text-black text-[12px] md:text-[18px] md:w-[400px] lg:text-[20px] font-semibold w-[200px] lg:w-[300px]">
            <span className="font-bold text-red-800 text-[15px] md:text-[20px] lg:text-[22px]">
              Budget Travels:
            </span>{" "}
            Your gateway to affordable adventures, offering budget-friendly
            packages to make unforgettable memories accessible to all
          </p>
          <div className="location flex text-neutral-500">
            <ImLocation className="mt-[5px] mr-[5px]" />
            <p>Kochi</p>
          </div>
          <div className="button pt-[10px]">
            <button className="bg-black p-2 px-3 rounded-xl shadow-md shadow-neutral-500 animate-pulse lg:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="header-right flex justify-center mt-[20px] lg:ml-[50px]">
        <img src={travel} className=" h-[250px] lg:scale-150" alt="" />
      </div>
    </div>
  );
};

export default Header;
