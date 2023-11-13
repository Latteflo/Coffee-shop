import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../api/firebase"
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
        console.log("Fetching products...");
        const querySnapshot = await getDocs(collection(db, "products"));
        console.log("Documents fetched: ", querySnapshot.docs.length);
        const productsArray: Product[] = querySnapshot.docs.map((doc) => ({
          ...(doc.data() as Product),
          id: doc.id,
        }));
        console.log("Products array: ", productsArray);
        setProducts(productsArray);
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
