import React, { useEffect } from 'react'
import Testmon from '../Card/Testmon'
import Aos from "aos";
import 'aos/dist/aos.css'
const Testimonials = () => {
  Aos.init({duration:900})
  useEffect(()=>{

  },[])
  return (
    <div className='Testimonials mt-[21px]  grid'data-aos="fade-right">
        <div className="heading text-green-700 flex justify-center mb-[25px]">
        <h1 className='text-3xl font-bold lg:text-4xl '>TESTIMONIALS</h1>
        </div>
        <div className="cards flex justify-center flex-wrap ">
            <Testmon/>
            <Testmon/>
            <Testmon/>
            <Testmon/>
            
        </div>
    </div>
  )
}

export default Testimonials