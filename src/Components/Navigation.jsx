import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App.jsx";
import Menu from "./Components/Menu.jsx";
import About from "./Components/Aboutjsx";
import Contact from "./Components/Contact.jsx";
import Order from "./Components/Order-online.jsx";
import Reservation from "./Components/Reservation.jsx";

const Navigation = () => {
  return (
    <router>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">HOME </Link>
          </li>

          <li>
            <Link to="/ABOUT">ABOUT</Link>
          </li>

          <li>
            <Link to="/CONTACT US">CONTACT US</Link>
          </li>

          <li>
            <Link to="/ORDER-ONLINE">ORDER-ONLINE</Link>
          </li>

          <li>
            <Link to="/MENU">MENU</Link>
          </li>

          <li>
            <Link to="/RESERVATION">RESERVATION</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/order-online" element={<Order />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </router>
  );
};

export default Navigation;
