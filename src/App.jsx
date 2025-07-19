import Navigation from "./Components/Navigation.jsx";
import Menu from "./Components/Menu.jsx";
import About from "./Components/About.jsx";
import Order from "./Components/Order-online.jsx";
import Home from "./Components/Home.jsx";
import Reservation from "./Components/Reservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from "./Components/PageNotFound.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Order" element={<Order />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <br />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
