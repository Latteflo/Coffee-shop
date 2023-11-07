// ProductCard.tsx
import React from "react"
import { Link } from "react-router-dom"
import { ProductType } from "../mockData"
import "../../../index.css"
import "./card.css"

type ProductCardProps = {
  product: ProductType
  onAddToCart: (product: ProductType) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      <p className="product-description">
        {product.description || "No description available"}
      </p>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  )
}

export default ProductCard
