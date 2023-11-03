import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlus,
  faMinus,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons"
import "../../index.css"
import "./searchResults.css"

const allProducts = [
  {
    id: 1,
    name: "Expresso",
    category: "Coffee",
    price: 5.0,
    description: "Rich and creamy",
    image: "../../assets/images/coffeeee.png",
  },
  {
    id: 2,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  },
  {
    id: 3,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  },
  {
    id: 4,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  }, {
    id: 5,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  }, {
    id: 6,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  }, {
    id: 7,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  }, {
    id: 8,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  }, {
    id: 9,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  }, {
    id: 10,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  }, {
    id: 11,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  }, {
    id: 12,
    name: "Latte",
    category: "Coffee",
    price: 4.5,
    description: "Smooth and silky",
    image: "../../assets/images/coffeeee.png",
  },

]

const SearchResults: React.FC = () => {
  const location = useLocation()
  const [filteredProducts, setFilteredProducts] = useState<
    {
      id: number
      name: string
      category: string
      price: number
      description: string
      image: string
    }[]
  >([])

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("q") || ""

    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )

    setFilteredProducts(results)
  }, [location.search])

  interface Cart {
    [key: number]: number
  }

  const [cartState, setCartState] = useState<Cart>({})

  const addToCart = (id: number) => {
    setCartState((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }))
  }

  const removeFromCart = (id: number) => {
    setCartState((prevCart) => {
      const newCart = { ...prevCart }
      if (newCart[id]) {
        newCart[id] -= 1
        if (newCart[id] === 0) {
          delete newCart[id]
        }
      }
      return newCart
    })
  }

  return (
    <div className="search-results-container">
      <ul className="search-results-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="search-results-item">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p> 
            <p className="price">${product.price.toFixed(2)}</p>{" "}
            <div className="addToBasket">
              <span>
                <FontAwesomeIcon icon={faShoppingBasket} className="basket" />
                {cartState[product.id] || 0}
              </span>
              <div className="buttons">
                <button onClick={() => addToCart(product.id)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button onClick={() => removeFromCart(product.id)}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchResults
