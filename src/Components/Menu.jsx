import React from "react";
import PageNotFound from "./PageNotFound.jsx";
import { CartContext } from "./ContextApi"; // importing contexthook
import { useContext } from "react"; // importing usecontext function in contexthook
import { FaCartPlus } from "react-icons/fa"; // Add cart icon
import Testimonies from "../PageSections/Testimonies.jsx";
import Style from "../Css/Menu.module.css"; // importing css module file

const products = [
  {
    id: 1,
    name: "Tropical Shirt",
    price: { currency: "USD", value: 39 },
    img: "/Male.jpeg",
    colors: ["red", "green", "blue"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 89 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 89.9 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 89.9 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 89 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 20 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 8 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 89 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 89.9 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 89.9 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 89.9 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 89 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
  {
    id: 1,
    name: "Tropical Shirt",
    price: { currency: "USD", value: 39 },
    img: "/Male.jpeg",
    colors: ["red", "green", "blue"],
  },
  {
    id: 1,
    name: "Tropical Shirt",
    price: { currency: "USD", value: 39 },
    img: "/Male.jpeg",
    colors: ["red", "green", "blue"],
  },
  {
    id: 1,
    name: "Tropical Shirt",
    price: { currency: "USD", value: 39 },
    img: "/Male.jpeg",
    colors: ["red", "green", "blue"],
  },
];

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <article className={Style.backgrounddesign}>.</article>
      <h1 className={Style.Delicacies}>DELICACIES</h1>
      <section className={Style.menucontainer}>
        <article className={Style.menucart}>
          {products.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="products picture" />
              <h4>
                {item.name} <span>${item.price.value}</span>{" "}
              </h4>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <button
                onClick={() => addToCart(item)}
                className={Style.cartButton}
              >
                <FaCartPlus /> Add to cart
              </button>
            </div>
          ))}
        </article>
      </section>
      <Testimonies />
    </>
  );
};

export default Menu;
