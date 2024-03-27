import React, { useEffect } from "react";
import Testmon from "../Card/Testmon";
import p1 from "../../assets/person-1.png";
import p2 from "../../assets/person-2.png";
import p3 from "../../assets/person-3.png";
import p4 from "../../assets/person-4.png";
import plane from "../../assets/plane.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  Aos.init({ duration: 900 });
  useEffect(() => {}, []);

  const baground = {
    backgroundImage: `url(${plane})`,
    backgroundSize: "cover",
  };
  return (
    <div
      style={baground}
      className="Testimonials mt-[55px]   "
      data-aos="fade-right"
    >
      <div className="heading text-green-700 flex justify-center mb-[25px]">
        <h1 className="text-3xl font-bold lg:text-4xl ">TESTIMONIALS</h1>
      </div>
      <div className="cards flex justify-center flex-wrap ">
        <Testmon pic={p1} name="Jhon" />
        <Testmon pic={p2} name="micke" />
        <Testmon pic={p3} name="fathima" />
        <Testmon pic={p4} name="subash" />
      </div>
    </div>
  );
};

export default Testimonials;
