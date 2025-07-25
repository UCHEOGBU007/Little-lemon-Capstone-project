import React from "react";
import Style from "../Css/AboutFooter.module.css";

const AboutFooter = () => {
  return (
    //Container starts here

    <div className={Style.container}>
      <div className={Style.introduction}>
        {" "}
        <h4>
          LITTLE LEMON <br /> <span>Chicago</span>{" "}
        </h4>
        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant. To craft the menu, Mario relies on family recipes and his
          experience as a chef in Italy.
          <br />
          Adrian does all the marketing for the restaurant and led the effort to
          expand the menu beyond classic Italian to incorporate additional
          cuisines from the Mediterranean region. Lorem ipsum dolor sit amet
          consectetur adipiscing elit quisque faucibus ex sapien vitae
          pellentesque sem placerat in id cursus mi. Lorem ipsum dolor sit amet
          consectetur adipiscing elit quisque faucibus ex sapien vitae
          pellentesque sem placerat in id cursus mi. Lorem ipsum dolor sit amet
          consectetur adipiscing elit quisque faucibus ex sapien vitae
          pellentesque sem placerat in id cursus mi. Lorem ipsum dolor sit amet
          consectetur adipiscing elit quisque faucibus ex sapien vitae
          pellentesque sem placerat in id cursus mi. Lorem ipsum dolor sit amet
          consectetur adipiscing elit quisque faucibus ex sapien vitae
          pellentesque sem placerat in id cursus mi. Lorem ipsum dolor sit amet
          consectetur adipiscing elit quisque faucibus ex sapien vitae
          pellentesque sem placerat in id cursus mi.
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
