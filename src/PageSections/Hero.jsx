import React from "react";
import Style from "../Css/Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // Hero main section starts here
    <main className={Style.hero}>
      <div className={Style.herotext}>
        <h2>
          Little Lemon <br />{" "}
          <span>
            <p className={Style.subtitle}>Chicago</p>
          </span>
        </h2>

        <p className={Style.description}>
          Lorem ipsum dolor sit amet dolor sit adipiscing elit consectetur
          quisque faucibus aucibus ex sapien vitae,Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Reserve a table button  */}

        <button>
          {" "}
          <Link to="/Reservation" className={Style.button}>
            Reserve a table
          </Link>{" "}
        </button>
      </div>

      {/* image beside hero section and it's size and height  */}

      <div className={Style.heroimage}>
        <img src="/Hero.jpg" alt="Hero Images" />
      </div>
    </main>
  );
};

export default Hero;
