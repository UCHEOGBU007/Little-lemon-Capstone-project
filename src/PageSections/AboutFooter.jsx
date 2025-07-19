import React from "react";
import Style from "../Css/AboutFooter.module.css";

const AboutFooter = () => {
  return (
    <div className={Style.container}>
      <div className={Style.introduction}>
        {" "}
        <h4>
          LITTLE LEMON <br /> <span>Chicago</span>{" "}
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
        </p>
      </div>
      <div className={Style.imgcontainer}>
        <img src="/Adrian.jpg" alt="cook pictures" className={Style.img2} />
        <img src="/Mario.jpg" alt="cook pictures" className={Style.img1} />
      </div>
    </div>
  );
};

export default AboutFooter;
