import Navigation from "./Components/Navigation.jsx";
import Menu from "./Components/Menu.jsx";
import About from "./Components/About.jsx";
import Order from "./Components/Order-online.jsx";
import Home from "./Components/Home.jsx";
import Reservation from "./Components/Reservation";
import Cart from "./Components/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from "./Components/PageNotFound.jsx";
import Footer from "./Components/Footer.jsx";
import { CartProvider } from "./Components/ContextApi.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
