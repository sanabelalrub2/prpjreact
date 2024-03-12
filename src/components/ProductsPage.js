import React, { useState, useEffect } from 'react';
// تأكد من تحديث المسار إلى بيانات المنتجات إذا كانت مستوردة
// import productsData from '../data/products';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // فرضية أن هذه البيانات تم جلبها محليًا أو من API
    setProducts(productsData);
  }, []);

  // تجميع المنتجات حسب الفئات
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div>
      <h2>صفحة المنتجات</h2>
      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div>
            {products.filter(product => product.category === category).map(filteredProduct => (
              <div key={filteredProduct.id}>
                <h4>{filteredProduct.name}</h4>
                <p>{filteredProduct.description}</p>
                <p>{filteredProduct.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
