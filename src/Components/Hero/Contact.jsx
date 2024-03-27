import React, { useEffect } from "react";
import mobile from "../../assets/phone.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'
const Contact = () => {
 useEffect(()=>{
Aos.init({duration:900})
 },[])
const onSubmit=(e)=>{
    e.preventDefault();
}
    
  return (
    <div className="contact mb-[20px] mt-[25px] lg:mt-[100px]  " id="Contact" data-aos="fade-right">
      <div className="heading  flex justify-center mb-[20px]">
        <h1 className="text-3xl text-green-700 font-bold lg:text-4xl lg:ml-[230px]">Contact us</h1>
      </div>
      <div className="contact-section flex  justify-center lg:flex lg:justify-aroun">
        <div className="  hidden   icon lg:flex  pl-[20px]">
               <img src={mobile} className='h-[400px]  ml-[25px] animate-bounce' alt="mobile" />
            </div>
        <div className="contact-form flex justify-center flex-col">
          <h1 className="text-black text-center font-bold mb-[10px]">Fill your Details</h1>
          <form className="flex scale-75 md:scale-105 flex-col justify-center hover:shadow-lg duration-300 p-3  py-[21px] rounded-md" action="submit">
            <input
              className="bg-white text-black p-3 rounded-md  md:w-[400px] mb-[20px]"
              type="text"
              placeholder="Your Name"
              id=""
            />
            <input
              className="bg-white text-black p-3 rounded-md w-[400px] mb-[20px]"
              type="number"
              placeholder="Phone Number"
              id=""
            />
            <input
              className="bg-white text-black p-3 rounded-md w-[400px] mb-[20px]"
              type="text"
              placeholder="Discription"
              id=""
            />
            <div className="button mb-[10px]">
            <button onClick={onSubmit} className="bg-black p-2 px-5 rounded-md shadow-md shadow-neutral-500">Send</button>
          </div>
          </form>
          <div className="smallHeading flex justify-center mt-[20px]">
            <h1 className="text-2xl font-bold text-black">Reach us</h1>
          </div>
          <div className="social-icons flex justify-center text-black mt-[30px]">
          <ul className='flex cursor-pointer mb-[20px] duration-300 '>
          <li className='bg-white rounded-full  mr-[10px] drop-shadow-md p-3 d hover:bg-neutral-300  duratio-300 '> <a href=""><FaInstagram size={20}  /></a> </li>
          <li className='bg-white  rounded-full mr-[10px]  drop-shadow-md  p-3 hover:bg-neutral-300 ' >  <a href=""> <FaWhatsapp size={20} /></a></li>
          <li className='bg-white  rounded-full mr-[10px] drop-shadow-md p-3 hover:bg-neutral-300' > <a href=""><FaYoutube size={20} /></a></li>
          <li className='bg-white rounded-full mr-[10px] drop-shadow-md p-3 hover:bg-neutral-300' > <a href=""><FaTwitter size={20}  /></a>    </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
