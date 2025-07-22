import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Css/Navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <div className={Styles.logo}>
          <img src="/Logo.jpg" alt="Little Lemon Logo" />
        </div>

        <ul className={`${Styles.menu} ${isMenuOpen ? Styles.show : ""}`}>
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

        {!isMenuOpen ? (
          <div className={Styles.openmenu} onClick={() => setIsMenuOpen(true)}>
            <GiHamburgerMenu />
          </div>
        ) : (
          <div
            className={Styles.closemenu}
            onClick={() => setIsMenuOpen(false)}
          >
            <MdCancel />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
