import React, { useState } from "react"
import SearchResults from "../SearchResults/SearchResults"
import { mockProducts } from "../Product/mockData"
import { ProductType } from '../../../types';

type CartItemType = ProductType & {
  quantity: number
}

const OnlineShop: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>(mockProducts);
  const [cart, setCart] = useState<CartItemType[]>([])

  const handleAddToCart = (productToAdd: ProductType) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === productToAdd.id);

      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  return (
    <section className="online-shop">
      <SearchResults products={products} onAddToCart={handleAddToCart} />
    </section>
  );
};

export default OnlineShop;
