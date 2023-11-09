import React from 'react';
import products from '../../products.json';
import './categories.css';

type Category = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
};

const Categories: React.FC = () => {
  return (
    <div className="categories-container">
      {products.map((product: Category) => (
        <div key={product.id} className="category-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
