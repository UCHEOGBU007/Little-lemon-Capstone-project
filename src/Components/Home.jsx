import React from "react";
import Hero from "../PageSections/Hero.jsx";
import Body from "../PageSections/Body.jsx";
import Testimonies from "../PageSections/Testimonies.jsx";
import AboutFooter from "../PageSections/AboutFooter.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Body />
      <Testimonies />
      <AboutFooter />
    </div>
  );
};

export default Home;
