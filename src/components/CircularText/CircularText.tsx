import React from 'react';
import './circularText.css';

const CircularText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h1 className="circularText">
      {Array.from(text).map((char, i) => (
        <span className={`char${i + 1}`} key={i}>
          {char}
        </span>
      ))}
    </h1>
  );
};

export default CircularText;
