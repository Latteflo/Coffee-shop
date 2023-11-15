import { useState, useEffect, createContext, useContext } from "react"
import axios from "axios"

type Product = {
  id: string
  title: string
  description: string
  image: string
  price: number
}

const ProductsContext = createContext<Product[]>([])

export const useProducts = () => useContext(ProductsContext)

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://coffee-shop-bc2d7-default-rtdb.europe-west1.firebasedatabase.app/.json"
        )
        if (response.data) {
            const productsArray = Object.keys(response.data).map((key) => ({
                id: key,
                ...response.data[key],
              }));              
          setProducts(productsArray)
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}

