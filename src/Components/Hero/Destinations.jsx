import React from 'react'
import Card from '../Card/Card'
import Taj_mahal from '../../assets/Taj_Mahal.jpeg'
import Mysore from '../../assets/Mysore_Palace.jpg'
import Kashmir from '../../assets/kashmir.jpg'
import hampi from '../../assets/Hampi.jpg'
import guruduar from '../../assets/guruduar.jpg'

const Destinations = () => {
  return (
    <div className='Destination mt-[20px] ' id='Destinations'>
        <div className="title flex justify-center">
            <h1 className='text-3xl font-bold text-green-700'>DESTINATIONS</h1>
        </div>
        <div className="card flex justify-center flex-wrap">
            <Card  pic={Taj_mahal}    place="Taj Mahal" duration="8 days" price="6000"/>
            <Card   pic={Mysore}    place="Mysor Palace" duration="1day" price="2000"   />
            <Card    pic={Kashmir}   place="Kashmir" duration="12 days" price="20000" />
            <Card   pic={hampi}      place=" Hampi" duration="8 days" price="7000"/>
            <Card   pic={guruduar}   place="gurudwara" duration="10 days" price="600" />
        </div>
    </div>
  )
}

export default Destinations