// // Context api component.

// import { createContext, useState } from "react";

// // creating context and naming it Cartcontext.
// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // For adding items to the cart function.
//   const addToCart = (item) => {
//     const exists = cartItems.find((i) => i.id === item.id);
//     if (exists) {
//       setCartItems(
//         cartItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   // for removing item according to the one user wants to delete

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   // resetting the cart content to be zero.

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exists = cartItems.find((i) => i.id === item.id);
    if (exists) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  // ➕ Increase quantity of a specific item
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ➖ Decrease quantity of a specific item, remove if it hits zero
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // inside CartProvider, after all cart functions
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price.value * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
