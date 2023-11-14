import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./categories.css"

type Product = {
  id: string
  title: string
  description: string
  image: string
  price: number
}

const Categories: React.FC = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://coffee-shop-bc2d7-default-rtdb.europe-west1.firebasedatabase.app/.json")   
        if (response.data) {
          const productsArray = Object.keys(response.data).map(key => ({
            id: key,
            ...response.data[key]
          }));
          setProducts(productsArray);
        } 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);
  
  
  
  const handleCardClick = (id: string) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className="categories-container">
      {products.map((product) => (
        <div
          key={product.id}
          className="category-card"
          onClick={() => handleCardClick(product.id)}
        >
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Categories
