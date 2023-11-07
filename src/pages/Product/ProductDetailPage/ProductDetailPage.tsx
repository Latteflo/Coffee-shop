// ProductDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../mockData';
import '../../../index.css'
import './details.css'


const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find((p) => p.id === Number(id)) || {
    title: '',
    image: '',
    description: '',
    price: 0,
    id: 0, 
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-detail-page'>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetailPage;
