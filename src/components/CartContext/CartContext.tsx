import React, { createContext, useContext, useState } from "react"

const CartContext = createContext({
  quantity: 0,
  addToCart: (amount: number) => {},
})

export const useCart = () => useContext(CartContext)

export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [quantity, setQuantity] = useState(0)

  const addToCart = (amount: number) => {
    setQuantity((prevQuantity) => prevQuantity + amount)
  }

  return (
    <CartContext.Provider value={{ quantity, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
