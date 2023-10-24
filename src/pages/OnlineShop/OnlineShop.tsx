import React from 'react';
import "../../index.css"
import "./onlineShop.css"

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
      {/* Carousel items go here */}
      <div className="carousel-item">Item 1</div>
      <div className="carousel-item">Item 2</div>
      <div className="carousel-item">Item 3</div>
    </div>
  );
};

const PopularChoices: React.FC = () => {
  return (
    <div className="popular-choices">
      {/* Popular choice cards go here */}
      <div className="choice-card">Popular Choice 1</div>
      <div className="choice-card">Popular Choice 2</div>
      <div className="choice-card">Popular Choice 3</div>
    </div>
  );
};

const OnlineShop: React.FC = () => {
  return (
    <section className="offers">
      <div className="shop-section">
        <div className="left-side-shop">
          <h4>Special Offers</h4>
          {/* Other content for the left side */}
          <p>Get special discounts this month!</p>
          <p>Free shipping for orders over $50.</p>
        </div>
        <div className="right-side-shop">
          <PopularChoices />
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default OnlineShop;
