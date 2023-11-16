import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../components/ProductsContext/ProductsContext";
import { useCart } from "../../components/CartContext/CartContext";
import NotFound from "../NotFound/NotFound";
import "./productDetail.css";
import { FaTrash, FaArrowLeft, FaCartPlus, FaCartArrowDown } from 'react-icons/fa';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const products = useProducts()
  const { addToCart } = useCart()

  const productId = Number(id)

  const product = products.find((p) => Number(p.id) === productId)

  const [quantity, setQuantity] = useState<number>(1)
  const [showQuantity, setShowQuantity] = useState<boolean>(false)

  const handleAddToCart = () => {
    if (product) {
      addToCart( quantity);   
      setShowQuantity(true)
      setQuantity ( quantity+1)
    }
  }

  const handleRemoveFromCart = () => {
    if (product) {
      addToCart( -quantity);   
      setShowQuantity(true)
      setQuantity (0)
    }
  }
  const handleDecreaseQuantity = () => {
    if (product && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value))
  }

  const goBackToCategories = () => {
    navigate("/categories")
  }

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="product-detail-container">
      <button className="go-back-button" onClick={goBackToCategories}>
        <FaArrowLeft /> Back
      </button>
      <div className="product-image-section">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info-section">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="quantity-selection">
          <label htmlFor="quantity">Items in the cart: </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="0"
          />
        </div>
        <div className="product-actions">
          <button className="action-button" onClick={handleAddToCart} aria-label="add to cart">
            <FaCartPlus />  Add
          </button>
          <button className="action-button" onClick={handleDecreaseQuantity} aria-label="remove from cart">
          <FaCartArrowDown /> Remove
        </button>
          <button className="action-button" onClick={handleRemoveFromCart} aria-label="empthy cart">
            <FaTrash /> Empty
          </button>
        </div>
        {showQuantity}
      </div>
    </div>
  );
};

export default ProductDetailPage;

