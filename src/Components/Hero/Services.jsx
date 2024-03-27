import React, { useEffect } from "react";
import SmallCard from "../Card/SmallCard";
import gear from "../../assets/gear.svg";
import flight from "../../assets/flight.svg";
import money from "../../assets/money.svg";
import weather from "../../assets/weather.svg";
import bgImg from "../../assets/hero-bg.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import Others from "./Others";
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      style={bgStyle}
      className="services mt-[20px] lg:h-[90vh]  "
      id="Services"
      data-aos="fade-right"
    >
      <div className="heading flex justify-center">
        <h1 className="text-3xl text-green-700 font-bold mb-[25px] lg:text-4xl mt-[20px]">
          SERVICES
        </h1>
      </div>
      <div className="card flex justify-center flex-wrap">
        <SmallCard
          pic={gear}
          heading="Customization"
          instuction=" We understand that every traveler is unique, which is why we offer customization options to tailor our services to your preferences. "
        />
        <SmallCard
          pic={flight}
          heading="Best Flights"
          instuction="Planning a trip? Our platform provides access to the best flight options available, ensuring you can find the perfect itinerary to suit your needs and budget."
        />
        <SmallCard
          pic={weather}
          heading="Calculated Weather"
          instuction="Stay ahead of the weather with our accurate and up-to-date forecasts. Whether you're planning outdoor activities or simply want to know what to expect on your journey,"
        />
        <SmallCard
          pic={money}
          heading="Budget Friendly"
          instuction=" with our commitment to affordability, enjoy budget-friendly travel solutions without compromising on quality"
        />
      </div>
      <div className="others">
        <Others />
      </div>
    </div>
  );
};

export default Services;
