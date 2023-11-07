// SearchResults.tsx
import React from "react"
import ProductCard from "../Product/ProductCard/ProductCard"
import { ProductType } from "../../../types"
import '../../index.css'
import './search.css'

interface SearchResultsProps {
  products: ProductType[]
  onAddToCart: (product: ProductType) => void
}

const SearchResults: React.FC<SearchResultsProps> = ({
  products,
  onAddToCart,
}) => {
  return (
    <div className="search-results">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            ...product,
            rating: product.rating || 0,
            reviewCount: product.reviewCount ?? 0,
          }}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default SearchResults
