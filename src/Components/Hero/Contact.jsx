import React from "react";
import mobile from "../../assets/phone.png";
const Contact = () => {

const onSubmit=(e)=>{
    e.preventDefault();
}
    
  return (
    <div className="contact mb-[20px]" id="Contact">
      <div className="heading  flex justify-center mb-[20px]">
        <h1 className="text-3xl text-green-700 font-bold">Contact us</h1>
      </div>
      <div className="contact-section flex  justify-center">
        {/* <div className="icon flex justify-start pl-[20px]">
               <img src={mobile} className='h-[100px]  ml-[25px] animate-bounce' alt="mobile" />
            </div> */}
        <div className="contact-form flex justify-center flex-col">
          <h1 className="text-black text-center font-bold mb-[10px]">Fill your Details</h1>
          <form className="flex flex-col justify-center hover:shadow-lg duration-300 p-3 py-[21px] rounded-md" action="submit">
            <input
              className="bg-white text-black p-3 rounded-md w-[400px] mb-[20px]"
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
              placeholder="Adress"
              id=""
            />
            <div className="button mb-[10px]">
            <button onClick={onSubmit} className="bg-black p-2 px-5 rounded-md shadow-md shadow-neutral-500">Send</button>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
