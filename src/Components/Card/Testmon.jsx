import React from "react";
import dummy from "../../assets/person-1.png";
import star from '../../assets/star.svg'
const Testmon = (props) => {
  return (
    <div className="container p-[15px]  w-[340px]  bg-white rounded-lg my-[21px] shadow-md shadow-neutral-400 md:ml-[20px] ml-[10px]">
      <div className="nameAndlogo flex px-[5px]">
        <img src={dummy} alt="avatar" />
        <h1 className="ml-[8px] mt-[15px] text-black">dumyname</h1>
      </div>
      <div className="discription mt-[10px] text-black ">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          voluptatem harum doloribus itaque sapiente obcaecati quisquam facilis
         
        </p>
        <ul className="star flex py-[10px]">
            <li><img src={star} className="h-[20px]" alt="star" /></li>
            <li><img src={star} className="h-[20px]" alt="star" /></li>
            <li><img src={star} className="h-[20px]" alt="star" /></li>
            <li><img src={star}  className="h-[20px]" alt="star" /></li>
            <li><img src={star} className="h-[20px]" alt="star" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Testmon;
