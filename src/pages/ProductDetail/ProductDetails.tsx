import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../index.css";
import "./productDetail.css";
import NotFound from "../NotFound/NotFound";
import axios from "axios";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [products, setProducts] = useState<any[]>([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://coffee-shop-bc2d7-default-rtdb.europe-west1.firebasedatabase.app/.json");
        if (response.data) {
          const productsArray = Object.keys(response.data).map(key => ({
            id: key,
            ...response.data[key]
          }));
          setProducts(productsArray); 
        } else {
          console.log("No data available at this path");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const product = products.find(p => p.id === id); // Update this line

  const [quantity, setQuantity] = useState<number>(1);
  const [showQuantity, setShowQuantity] = useState<boolean>(false);

  const handleAddToCart = () => {
    setShowQuantity(true);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  if (!product) {
    return (
      <>
        <NotFound />
      </>
    )
  }
  const goBackToCategories = () => {
    navigate("/Categories")
  }
  return (
    <div className="product-detail-container">
      <div className="product-image-section">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-info-section">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <div className="quantity-selection">
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>{" "}
        {showQuantity && <p className="added">Added to cart: {quantity} item(s)</p>}{" "}
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="go-back-button" onClick={goBackToCategories}>
          Go Back to Categories
        </button>
      </div>
    </div>
  )
}

export default ProductDetailPage