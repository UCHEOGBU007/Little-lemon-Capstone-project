// src/components/Cart.jsx
import { useContext } from "react";
import { CartContext } from "./ContextApi";
import Style from "../Css/Cart.module.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <section className={Style.basket}>
        <h1>MY Cart</h1>
      </section>
      <section className={Style.cartcontainer}>
        <div className={Style.cart}>
          {/* The H2 will interchange text if the cart items are more than zero */}

          <h2>{totalItems > 0 ? "Items selected" : "Empty Cart"}</h2>

          {/* looping through the cartitems with map method for displaying items stored in the cart hook */}

          {cartItems.map((item) => (
            <div key={item.id} className={Style.cartitems}>
              <div className={Style.cartitempictures}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={Style.cartimage}
                />
                <span>
                  {item.name} - ${item.price.value} × {item.quantity}= $
                  {item.price.value * item.quantity}{" "}
                </span>
              </div>

              {/* span for Buttons increament and decreament */}
              <span className={Style.cartquantity}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>

                <span style={{ marginTop: "12px", fontWeight: "bolder" }}>
                  {item.quantity}
                </span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button
                  className={Style.removebutton}
                  onClick={() => removeFromCart(item.id)}
                >
                  X Remove
                </button>
              </span>
              <hr />
            </div>
          ))}

          <button className={Style.clearbutton} onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        {/* cart total price starts here  */}

        <div className={Style.totalprice}>
          <h1>Cart Summary</h1>
          <hr />
          <h5>
            Order Total: <span>${getTotalPrice()}</span>{" "}
          </h5>
          <button
            onClick={() => alert("Still working on it to add Payment gateway")}
          >
            Checkout
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
