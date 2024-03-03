// src/components/ProductList.js

import React, { useState, useEffect } from 'react';
// إذا كان لديك ملف بيانات محلي:
import mockProducts from '../data/mockProducts.json'; // افترض أن بيانات المنتجات مخزنة في هذا الملف

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // هنا يمكنك جلب البيانات من الخادم إذا لزم الأمر
    // fetch('/api/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data));
    
    // أو استخدام بيانات محلية مزيفة
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          {/* أضف المزيد من تفاصيل المنتج هنا */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
