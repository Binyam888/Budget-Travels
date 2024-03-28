import React, { useEffect } from "react";
import fChtr from "../../assets/femal.png";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
const Others = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  return (
    <div
      className="Others flex justify-center mt-[50px] scale-75 md:scale-100  pb-[30px]"
      data-aos="fade-right"
    >
      <div className="text flex justify-center align-middle flex-col">
        <h1 className="text-center text-black font-bold mb-[20px]">
          Other Services provided
        </h1>
        <ul className="bg-bg-neutral-300  rounded-md  text-center flex flex-col justify-center cursor-pointer">
          <li className="text-black font-bold shadow-md rounded-md p-2 text-[12px] ">
            Tour Package
          </li>
          <li className="text-black font-bold shadow-md rounded-md  mt-[12px] text-[12px]  p-2">
            Transportation
          </li>
          <li className="text-black font-bold shadow-md rounded-md text-[12px]  mt-[12px] p-2">
            Accommodation
          </li>
          <p className="text-red-900 animate-pulse font-bold text-[13px]  mt-[10px]">
            {" "}
            <Link to="Contact" smooth={true} offset={-60} duration={800}>
              Click here for information
            </Link>
          </p>
        </ul>
      </div>
      <div className="img" data-aos="fade-right">
        <img src={fChtr} className=" h-[200px] lg:h-[300px]" alt="png" />
      </div>
    </div>
  );
};

export default Others;
