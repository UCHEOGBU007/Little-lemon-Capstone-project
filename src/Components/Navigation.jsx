import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Css/Navigation.module.css";
import "../Css/Navigation.module.css";

const Navigation = () => {
  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <div className={Styles.logo}>
          {" "}
          <img src="/Logo.jpg" alt="Little lemon Logo" />
        </div>
        <ul>
          <li>
            <Link to="/" className={Styles.link}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/About" className={Styles.link}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/Menu" className={Styles.link}>
              MENU
            </Link>
          </li>
          <li>
            <Link to="/Reservation" className={Styles.link}>
              RESERVATION
            </Link>
          </li>
          <li>
            <Link to="/Order" className={Styles.order}>
              ONLINE-ORDER
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
