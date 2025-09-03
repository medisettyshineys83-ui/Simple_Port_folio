// src/components/Card.jsx

import React from 'react';
import './Card.css'; // We'll create this CSS file next

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;