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
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Home">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT US</Link>
          </li>
          <li>
            <Link to="/Order">ORDER ONLINE</Link>
          </li>
          <li>
            <Link to="/Menu">MENU</Link>
          </li>
          <li>
            <Link to="/Reservation">RESERVATION</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
