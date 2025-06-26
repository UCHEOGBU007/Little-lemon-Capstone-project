// import React from "react";
// import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
// import App from "../App.jsx";

// import Menu from "./src/Components/Menu.jsx";
// import About from "./src/Components/Aboutjsx";
// import Contact from "./src/Components/Contact.jsx";
// import Order from "./src/Components/Order-online.jsx";
// import Reservation from "./src/Components/Reservation.jsx";

// const Navigation = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             {" "}
//             <Link to="/Home">HOME </Link>
//           </li>

//           <li>
//             <Link to="/About">ABOUT</Link>
//           </li>

//           <li>
//             <Link to="/Contact-us">CONTACT US</Link>
//           </li>

//           <li>
//             <Link to="/Order-online">ORDER-ONLINE</Link>
//           </li>

//           <li>
//             <Link to="/Menu">MENU</Link>
//           </li>

//           <li>
//             <Link to="/Reservation">RESERVATION</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/Home" element={<App />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Contact-us" element={<Contact />} />
//         <Route path="/Order-online" element={<Order />} />
//         <Route path="/Menu" element={<Menu />} />
//         <Route path="/Reservation" element={<Reservation />} />
//       </Routes>
//     </Router>
//   );
// };

// export default Navigation;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "../App.jsx";

import Menu from "./Menu.jsx";
import About from "./Aboutjsx";
import Contact from "./Contact.jsx";
import Order from "./Order-online.jsx";
import Reservation from "./Reservation.jsx";

const Navigation = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
          <li>
            <Link to="/order-online">ORDER ONLINE</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/reservation">RESERVATION</Link>
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
    </Router>
  );
};

export default Navigation;
