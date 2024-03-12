import React, { useState, useEffect } from 'react';

const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesData = [
      {
        _id: "656afd2a5f24a07ecd5a5090",
        name: "men's fashion",
        image: {
          secure_url: "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701511023/tshop/categories/zfh7vcn1zswyvkzrdqwg.webp",
          public_id: "tshop/categories/zfh7vcn1zswyvkzrdqwg"
        },
        id: "656afd2a5f24a07ecd5a5090"
      },
      {
        _id: "656b5cc47ef25cbb5771636b",
        name: "appliances",
        image: {
          secure_url: "https://res.cloudinary.com/dbcwhbekq/image/upload/v1701534915/tshop/categories/aqk1ge1xe5ux2mvhvkh5.webp",
          public_id: "tshop/categories/aqk1ge1xe5ux2mvhvkh5"
        },
        id: "656b5cc47ef25cbb5771636b"
      }
    ];
    
    setCategories(categoriesData);
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <img src={category.image.secure_url} alt={category.name} style={{width: "100px", height: "100px"}} />
          </div>
        ))}
      </div>
    </div>
  );
};

// تصحيح الخطأ هنا بتغيير `category` إلى `CategoriesComponent`
export default CategoriesComponent;
