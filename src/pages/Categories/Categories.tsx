import React from "react"
import { useNavigate } from "react-router-dom"
import products from "../../products.json"
import "./categories.css"

type Product = {
  id: number
  title: string
  description: string
  image: string
  price: number
}

const Categories: React.FC = () => {
  const navigate = useNavigate()

  const handleCardClick = (id: number) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className="categories-container">
      {products.map((product: Product) => (
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
