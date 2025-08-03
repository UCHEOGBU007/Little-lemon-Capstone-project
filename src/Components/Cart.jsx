// src/components/Cart.jsx
import { useContext } from "react";
import { CartContext } from "./ContextApi";

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
      <div>
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.name} - ${item.price.value} × {item.quantity} = $
            {item.price.value * item.quantity}{" "}
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}

        <button onClick={clearCart}>Clear Cart</button>
      </div>
      <h3>Total: ${getTotalPrice()}</h3>
    </>
  );
};

export default Cart;
