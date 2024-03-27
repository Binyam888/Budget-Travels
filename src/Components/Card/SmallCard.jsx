import React from "react";

const SmallCard = (props) => {
    const {pic,heading,instuction} = props
  return (
    <div className="smallCard flex flex-col justify-center bg-neutral-300 hover:bg-neutral-400 duration-300 rounded-lg w-[250px] mb-[20px] shadow-md shadow-neutral-400 pb-[10px] md:ml-[20px]">
      <div className="logo flex justify-center pt-[20px] ">
        <img src={pic} alt="" className="h-[50px]" />
      </div>
      <div className="main-heading text-black text-center font-bold mt-[5px]">
        <h1 >{heading}</h1>
      </div>
      <div className="discription text-neutral-600 px-[13px]">
        <p>{instuction}</p>
      </div>
    </div>
  );
};

export default SmallCard;
