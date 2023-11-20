import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useProducts } from "../../components/ProductsContext/ProductsContext"
import { useCart } from "../../components/CartContext/CartContext"
import NotFound from "../NotFound/NotFound"
import "./productDetail.css"
import {
  FaArrowLeft,
  FaPlus,
  FaMinus,
} from "react-icons/fa"

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const products = useProducts()
  const { addToCart, removeFromCart } = useCart()
  const productId = Number(id)
  const product = products.find((p) => Number(p.id) === productId)

  const [selectedQuantity, setSelectedQuantity] = useState<number>(0)

  const handleAddToCart = () => {
    if (product) {
      addToCart(1)
      setSelectedQuantity((prev) => prev + 1)
    }
  }

  const handleRemoveFromCart = () => {
    if (product && selectedQuantity > 0) {
      removeFromCart(1)
      setSelectedQuantity((prev) => Math.max(0, prev - 1))
    }
  }

  const goBackToCategories = () => {
    navigate("/categories")
  }

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="details-page">
      <div className="product-detail-container">
        <button className="go-back-button" onClick={goBackToCategories}>
          <FaArrowLeft /> Back
        </button>
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="product-info-section">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <div className="quantity-info">
            <span className="quantity-label">
              Quantity in Cart: {selectedQuantity}
            </span>
          </div>
          <div className="product-actions">
            <button
              className="action-button"
              onClick={handleAddToCart}
              aria-label="add to cart"
            >
              <FaPlus /> Add One
            </button>
            <button
              className="action-button"
              onClick={handleRemoveFromCart}
              aria-label="remove from cart"
              disabled={selectedQuantity === 0}
            >
              <FaMinus /> Remove One
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
