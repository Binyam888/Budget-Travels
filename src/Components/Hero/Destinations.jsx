import React, { useEffect } from "react";
import Card from "../Card/Card";
import Taj_mahal from "../../assets/Taj_Mahal.jpeg";
import Mysore from "../../assets/Mysore_Palace.jpg";
import Kashmir from "../../assets/kashmir.jpg";
import hampi from "../../assets/Hampi.jpg";
import guruduar from "../../assets/guruduar.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
const Destinations = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  return (
    <div
      className="Destination mt-[20px] "
      id="Destinations"
      data-aos="fade-right"
    >
      <div className="title flex justify-center ">
        <h1 className="text-3xl font-bold text-green-700 lg:text-4xl mb-[25px]">
          DESTINATIONS
        </h1>
      </div>
      <div className="card flex justify-center flex-wrap">
        <Card
          pic={Taj_mahal}
          place="Taj Mahal"
          duration="8 days"
          price="6000"
          text="The Taj Mahal is an iconic symbol of India, located in the city of Agra, in the state of Uttar Pradesh. It is a magnificent white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, who died during childbirth. Construction of the Taj Mahal began in 1632 and was completed in 1653, employing thousands of artisans and craftsmen."
        />
        <Card
          pic={Mysore}
          place="Mysor Palace"
          duration="1day"
          price="2000"
          text="The Mysore Palace, also known as the Amba Vilas Palace, is a grand and opulent royal residence located in the city of Mysore in the southern state of Karnataka, India. It is one of the most famous tourist attractions in India and is renowned for its exquisite architecture, intricate artwork, and historical significance. and it is a beautiful place And must vist location "
        />
        <Card
          pic={Kashmir}
          place="Kashmir"
          duration="12 days"
          price="20000"
          text="Kashmir is a region located in the northern part of the Indian subcontinent, bordered by India, Pakistan, and China. It is renowned for its stunning natural beauty, including snow-capped mountains, lush valleys, picturesque lakes, and meandering rivers. The region has been historically and culturally significant, attracting visitors and traders from various parts of the world."
        />
        <Card
          pic={hampi}
          place=" Hampi"
          duration="8 days"
          price="7000"
          text="Hampi is a UNESCO World Heritage Site located in the state of Karnataka, India. It is renowned for its rich history, stunning architecture, and dramatic landscape. Hampi was the capital of the Vijayanagara Empire, one of the greatest Hindu empires in Indian history, from the 14th to the 16th century The ruins of Hampi stretch over a vast area, covering approximately 26sq market streets, "
        />
        <Card
          pic={guruduar}
          place="gurudwara"
          duration="10 days"
          price="600"
          text="Gurudwaras typically house the Sikh holy scripture, the Guru Granth Sahib, which is treated with great reverence and respect. Sikhs gather at Gurudwaras to listen to hymns and teachings from the Guru Granth Sahib, participate in community service (seva), and share in communal meals called langar, which are open to all regardless of religion, caste, or creed."
        />
      </div>
    </div>
  );
};

export default Destinations;
