import { Link } from "react-router-dom";
import Style from "../Css/BodyHeader.module.css";
import { FaArrowRight } from "react-icons/fa";

const Body = () => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "6em ",
          padding: "0 2em",
          gap: "78%",
        }}
      >
        <h2 className={Style.homebodyheader}>Specials</h2>{" "}
        <Link to="/Menu" className={Style.link}>
          Order Online
        </Link>
      </div>

      {/* Card container starts here */}
      <div className={Style.container}>
        {/* First menu card Starts here  */}
        <div className={Style.menuCard}>
          <img src="/Pasta.jpg" alt="Spaghetti" />
          <h5>
            Spaghetti <span>$100</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          </p>
          <Link to="/Menu" className={Style.linkmenu}>
            Read More{" "}
            <span className={Style.arrow}>
              <FaArrowRight />
            </span>
          </Link>
        </div>

        {/* Second Menu card  starts here*/}
        <div className={Style.menuCard}>
          <img src="/Salad.jpg" alt="Salad" />
          <h5>
            Salad <span>$85</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          </p>
          <Link to="/Menu" className={Style.linkmenu}>
            Read More
            <span className={Style.arrow}>
              <FaArrowRight />
            </span>
          </Link>
        </div>

        {/* Third Menu card  starts here*/}
        <div className={Style.menuCard}>
          <img src="/TomatoesStew.jpg" alt="Tomato Sauce" />
          <h5>
            Tomato Sauce <span>$150</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          </p>
          <Link to="/Menu" className={Style.linkmenu}>
            Read More
            <span className={Style.arrow}>
              <FaArrowRight />
            </span>
          </Link>
        </div>
        {/* Foruth card of menu  */}
        <div className={Style.menuCard}>
          <img src="/Salad.jpg" alt="Salad" />
          <h5>
            Salad <span>$85</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
            faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.
          </p>
          <Link to="/Menu" className={Style.linkmenu}>
            Read More
            <span className={Style.arrow}>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Body;
