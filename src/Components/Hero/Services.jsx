import React from "react";
import SmallCard from "../Card/SmallCard";
import gear from "../../assets/gear.svg";

const Services = () => {
  return (
    <div className="services mt-[20px]" id="Services">
      <div className="heading flex justify-center">
        <h1 className="text-3xl text-green-700 font-bold mb-[15px]">
          SERVICES
        </h1>
      </div>
      <div className="card flex justify-center flex-wrap">
        <SmallCard pic={gear} heading="fgf" instuction="" />
        <SmallCard pic={gear} heading="fgf" instuction="" />
        <SmallCard pic={gear} heading="fgf" instuction="" />
        <SmallCard pic={gear} heading="fgf" instuction="" />
      </div>
    </div>
  );
};

export default Services;
