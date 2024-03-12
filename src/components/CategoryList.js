// في ملف CategoryList.js

import React from 'react';
import Category from './Category'; // تأكد من صحة المسار

const CategoryList = () => {
  // مثال على بيانات الفئات
  const categories = [
    {
      name: "الكترونيات",
      imageUrl: "https://example.com/electronics.jpg",
    },
    {
      name: "ملابس",
      imageUrl: "https://example.com/clothes.jpg",
    },
    // يمكن إضافة المزيد من الفئات
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <Category key={index} name={category.name} imageUrl={category.imageUrl} />
      ))}
    </div>
  );
};

export default CategoryList;
