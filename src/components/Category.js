// src/components/Category.js

import React from 'react';

const Category = ({ category }) => {
  return (
    <div className="category">
      <img src={category.image.secure_url} alt={category.name} />
      <h3>{category.name}</h3>
    </div>
  );
};

export default Category;
