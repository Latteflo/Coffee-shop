// ProductPage.tsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { mockProducts } from '../mockData'; 
import { ProductType } from '../../../../types'; 
import '../../../index.css';
import './product.css';

type ProductPageProps = {
  onAddToCart: (product: ProductType) => void;
};

const ProductPage: React.FC<ProductPageProps> = ({ onAddToCart }) => {
  return (
    <div className="product-page">
      {mockProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product}
          onAddToCart={onAddToCart} 
        />
      ))}
    </div>
  );
};

export default ProductPage;
