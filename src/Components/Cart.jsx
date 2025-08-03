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

  return (
    <>
      <section className={Style.cartcontainer}>
        <div className={Style.cart}>
          <h2>Items Selected</h2>
          {cartItems.map((item) => (
            <div key={item.id} className={Style.cartitems}>
              {item.name} - ${item.price.value}× {item.quantity}= $
              {item.price.value * item.quantity}{" "}
              {/* span for Buttons increament and decreament */}
              <span className={Style.cartquantity}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </span>
            </div>
          ))}

          <button onClick={clearCart}>Clear Cart</button>
        </div>

        {/* cart total price starts here  */}

        <div className={Style.totalprice}>
          <h3>Total: ${getTotalPrice()}</h3>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
