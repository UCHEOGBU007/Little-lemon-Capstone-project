import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Css/Navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "./ContextApi";

const Navigation = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate total quantity of all items

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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

        <Link
          to="/Cart"
          style={{ color: "black", fontSize: "2em", fontWeight: "1em" }}
        >
          <CiShoppingCart />
          <span style={{ color: "red" }}>{totalItems}</span>
        </Link>

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
