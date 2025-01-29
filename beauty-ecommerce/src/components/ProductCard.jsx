import React, { useState } from 'react';

function ProductCard({ product, addToCart, expandedProductId, setExpandedProductId }) {
  const [successMessage, setSuccessMessage] = useState('');
  const isExpanded = expandedProductId === product.id;

  const toggleDetails = () => {
    setExpandedProductId(isExpanded ? null : product.id);
  };

  const handleAddToCart = () => {
    addToCart(product);
    setSuccessMessage(`Successfully added to cart!`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="border rounded p-4 flex flex-col items-center bg-pink-100 hover:shadow-2xl transition-shadow duration-300">
      <img src={product.image} alt={product.name} className="w-30 h-30 object-cover mb-4" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={toggleDetails}>
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
      {isExpanded && <p className='mt-4 text-gray-800 bg-gray-200 p-2 rounded'>{product.description}</p>}
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {successMessage && <div className='text-center bg-green-100 text-green-800 p-2 mb-4 rounded'>{successMessage}</div>}
    </div>
  );
}

export default ProductCard;
