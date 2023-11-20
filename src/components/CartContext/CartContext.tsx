import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({
  quantity: 0,
  addToCart: (amount: number) => {},
  removeFromCart: (amount: number) => {},
});

export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = (amount: number) => {
    setQuantity(prevQuantity => prevQuantity + amount);
  };

  const removeFromCart = (amount: number) => {
    setQuantity(prevQuantity => Math.max(0, prevQuantity - amount));
  };

  return (
    <CartContext.Provider value={{ quantity, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
