import { IoMdStarOutline } from "react-icons/io";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Style from "../Css/Testimony.module.css";

const Testimonies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };
  return (
    <div className={Style.TestimonyContainer}>
      <h3>TESTIMONIALS</h3>
      <p>Read what others have to say about us</p>
      <Carousel partialVisible={true} responsive={responsive}>
        <div className={Style.Testimonycard}>
          <h5>Sandra</h5>
          <div>
            <img src="/Female1.jpeg" alt="Testimonies picture" />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elitquisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          </p>
        </div>
        <div className={Style.Testimonycard}>
          <h5>Helen</h5>
          <div>
            <img src="/Female2.jpeg" alt="Testimonies picture" />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elitquisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          </p>
        </div>
        <div className={Style.Testimonycard}>
          <h5>Mr Smith</h5>
          <div>
            <img src="/Leo.jpg" alt="Testimonies picture" />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elitquisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          </p>
        </div>
        <div className={Style.Testimonycard}>
          <h5>Fidel</h5>
          <div>
            <img src="/Male.jpeg" alt="Testimonies picture" />
            <span>
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elitquisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonies;
