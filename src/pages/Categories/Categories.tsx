import { useNavigate } from "react-router-dom"
import { useProducts } from "../../components/ProductsContext/ProductsContext"
import "./categories.css"

const Categories: React.FC = () => {
  const navigate = useNavigate()
  const products = useProducts()

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
