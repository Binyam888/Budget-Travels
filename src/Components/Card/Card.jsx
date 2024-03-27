import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import pic from '../../assets/card-img1.jpg'
const Card = (props) => {
  const  {pic,text,duration,price,place} = props
  return (
    <div className='card bg-neutral-300 rounded-xl shadow-lg shadow-neutral-400 my-[20px] ml-[20px]'>
        <div className="parent relative">
        <div className="card-img   rounded-xl overflow-hidden shadow-md shadow-black ">
            <img src={pic} alt="img" className='h-[180px] w-[285px]  object-cover' />
        </div>
        <div className="Child absolute h-[180px] w-[285px] bg-gradient bg-gradient-to-b from-transparent via-transparent to-black top-0 rounded-xl">

        </div>
        </div>
        <div className="card-text flex    justify-between mt-[10px] pb-[10px] ml-[10px]">
            <div className="text flex flex-col justify-start text-black ">
            <h1 className='text-[13px] font-sans'>{place}</h1>
            <div className="days flex text-black">
            <FaTelegramPlane size={12} className='mt-[4px] mr-[3px]'/>
            <p className='text-[13px] font-sans'>{duration}</p>
            </div>
              
            </div>
            <div className="price flex text-black mr-[12px]">
            <FaRupeeSign  size={12}  className='mt-[4px]'/>
            <p className='font-bold  text-[13px] font-sans'>{price}</p>
            </div>
            
        </div>
        <div className="discriptions p-3 ">
              <p className='w-[260px] text-[10px] text-neutral-700'>{text}</p>
            </div>
            <div className="button py-2  flex justify-end align-bottom ">
              <button className='bg-black p-2 px-5 rounded-md shadow-md shadow-neutral-500 scale-75 '>Book Now</button>
            </div>
            
    </div>
  )
}

export default Card