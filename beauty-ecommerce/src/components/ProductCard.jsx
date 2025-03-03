import React, { useState } from 'react'; // Import React and the useState hook.

// ProductCard Component: Displays product details, allows users to expand details, and add items to the cart
function ProductCard({ product, addToCart, expandedProductId, setExpandedProductId }) {
  // State to manage success message visibility
  const [successMessage, setSuccessMessage] = useState('');
  // Determine if the current product is expanded
  const isExpanded = expandedProductId === product.id;
  // Function to toggle product details view
  const toggleDetails = () => {
    setExpandedProductId(isExpanded ? null : product.id);
  };
  // Function to handle adding a product to the cart
  const handleAddToCart = () => {
    addToCart(product); // Call the addToCart function from props
    setSuccessMessage(`Successfully added to cart!`); // Show success message
    // Clear success message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="border rounded p-4 flex flex-col items-center bg-pink-100 hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="w-30 h-30 object-cover mb-4" />
      {/* Product Name */}
      <h2 className="text-lg font-bold">{product.name}</h2>
      {/* Product Price */}
      <p className="text-gray-700">{product.price}</p>
      {/* Button to toggle product details */}
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={toggleDetails}>
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
      {/* Display product details if expanded */}
      {isExpanded && <p className='mt-4 text-gray-800 bg-gray-200 p-2 rounded'>{product.description}</p>}
      {/* Button to add product to cart */}
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleAddToCart}>
        Add to Cart
      </button>
      {/* Success message display */}
      {successMessage && <div className='text-center bg-green-100 text-green-800 p-2 mb-4 rounded'>{successMessage}</div>}
    </div>
  );
}

export default ProductCard; // Export the ProductCard component
