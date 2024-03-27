import React from 'react'
import Testmon from '../Card/Testmon'

const Testimonials = () => {
  return (
    <div className='Testimonials mt-[21px]'>
        <div className="heading text-green-700 flex justify-center">
        <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
        </div>
        <div className="cards flex justify-center flex-wrap">
            <Testmon/>
            <Testmon/>
            <Testmon/>
            <Testmon/>
            
        </div>
    </div>
  )
}

export default Testimonials