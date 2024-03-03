// src/components/CategoryList.js

import React, { useState, useEffect } from 'react';
import Category from './Category';

import './CategoryList.css'; 

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // في حالة وجود خادم حي، يمكنك استبدال الكود التالي بجلب البيانات من الخادم
    const mockData = {
      "message": "success",
      "count": 2,
      "categories": [
        {
          "_id": "656afd2a5f24a07ecd5a5090",
          "name": "men's fashion",
          "image": {
            "secure_url": "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701511023/tshop/categories/zfh7vcn1zswyvkzrdqwg.webp",
            "public_id": "tshop/categories/zfh7vcn1zswyvkzrdqwg"
          },
          "id": "656afd2a5f24a07ecd5a5090"
        },
        {
          "_id": "656b5cc47ef25cbb5771636b",
          "name": "appliances",
          "image": {
            "secure_url": "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701534915/tshop/categories/aqk1ge1xe5ux2mvhvkh5.webp",
            "public_id": "tshop/categories/aqk1ge1xe5ux2mvhvkh5"
          },
          "id": "656b5cc47ef25cbb5771636b"
        }
      ]
    };
    
    setCategories(mockData.categories);
  }, []);

  return (
    <div className="category-list">
      {categories.map(category => (
        <Category key={category._id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
