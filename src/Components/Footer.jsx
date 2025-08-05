import React from "react";
import Style from "../Css/Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className={Style.footercontainer}>
        <div>
          <img src="/Logofooter1.png" alt="Logo" className={Style.logo} />
          {/* <form action="">
            <label htmlFor="newletter"> News Leter :</label>
            <br />
            <input
              type="email"
              id="email"
              name="newletter"
              placeholder="Suscribe"
            />
            <input type="submit" />
          </form> */}
        </div>

        <nav className={Style.section}>
          <h5>NAVIGATION:</h5>
          <ul>
            <li>
              <Link to="/" className={Style.link}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/About" className={Style.link}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/Menu" className={Style.link}>
                MENU
              </Link>
            </li>
            <li>
              <Link to="/Reservation" className={Style.link}>
                RESERVATION
              </Link>
            </li>
            <li>
              <Link to="/Order" className={Style.link}>
                ONLINE-ORDER
              </Link>
            </li>
          </ul>
        </nav>

        <address className={Style.section}>
          <h5>CONTACTS</h5>
          <a href="tel:+1234567890">📞 +123-456-7890</a>
          <a href="mailto:info@yourdomain.com">📧 Email Us</a>
          <div className={Style.mediaicons}>
            <FaFacebookF /> <IoLogoInstagram /> <FaTwitter />
            <FaLinkedinIn />
          </div>
          <form className={Style.newsletterForm} action="" method="post">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className={Style.emailInput}
            />
            <button type="submit" className={Style.submitButton}>
              Subscribe
            </button>
          </form>
        </address>
      </footer>

      <div className={Style.copyright}>
        <p>
          {" "}
          &copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
