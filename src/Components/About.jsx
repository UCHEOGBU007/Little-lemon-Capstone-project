import React from "react";
import AboutFooter from "../PageSections/AboutFooter";
import Style from "../Css/AboutComponent.module.css";

const About = () => {
  return (
    <>
      <section className={Style.about}>
        <img src="/Mario.jpg" alt="Pictures" />
      </section>

      <div className={Style.aboutheader}>
        <h4>
          About - <span className={Style.aboutheadersub}>us</span>{" "}
        </h4>
      </div>

      <div>
        <AboutFooter />
      </div>
    </>
  );
};

export default About;
