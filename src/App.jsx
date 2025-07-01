import Navigation from "./Components/Navigation.jsx";
import Menu from "./Components/Menu.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Order from "./Components/Order-online.jsx";
import Home from "./Components/Home.jsx";
import Reservation from "./Components/Reservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from "./Components/PageNotFound.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
