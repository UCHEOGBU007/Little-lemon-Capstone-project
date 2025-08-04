import React from "react";
import PageNotFound from "./PageNotFound.jsx";
import { CartContext } from "./ContextApi";
import { useContext } from "react";

const products = [
  {
    id: 1,
    name: "Tropical Shirt",
    price: { currency: "USD", value: 39.99 },
    img: "/Male.jpeg",
    colors: ["red", "green", "blue"],
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: { currency: "USD", value: 89.99 },
    img: "/Salad.jpg",
    colors: ["black", "grey"],
  },
];

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <section>
        <article>
          {products.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="products picture" />
              <p>
                {item.price.currency} {item.price.value}
              </p>
              <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};

export default Menu;
