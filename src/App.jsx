import Navigation from "./Components/Navigation.jsx";
import Menu from "./Components/Menu.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Order from "./Components/Order-online.jsx";
import Home from "./Components/Home.jsx";
import Reservation from "./Components/Reservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
