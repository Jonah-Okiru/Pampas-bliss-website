import React from 'react';
import ProductCard from '../components/ProductCard';

function HomePage({ products, addToCart, expandedProductId, setExpandedProductId }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          expandedProductId={expandedProductId}
          setExpandedProductId={setExpandedProductId}
        />
      ))}
    </div>
  );
}

export default HomePage;
