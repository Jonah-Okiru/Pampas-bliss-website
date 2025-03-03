import React from 'react'; // Import React

// Cart Component: Displays items in the cart, allows removal, and provides a WhatsApp order link
function Cart({ cart, removeFromCart }) {
  // Generate a WhatsApp order link with cart items formatted as a message
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    `I would like to order:\n${cart.map((item) => `${item.name} - ${item.price}`).join('\n')}`
  )}`;

  return (
    <div className="p-4">
      {/* Cart heading */}
      <h2 className="text-xl font-bold">Cart</h2>
      {/* Display message if the cart is empty */}
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        // Display list of cart items if cart is not empty
        <ul className="list-disc pl-5">
          {cart.map((item, index) => (
            <li key={index} className='flex justify-between items-center'>
              {/* Display product name and price */}
              {item.name} - {item.price}
              {/* Button to remove item from cart */}
              <button className='ml-1 border bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600' onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* Display WhatsApp order button only if cart has items */}
      {cart.length > 0 && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Order via WhatsApp
        </a>
      )}
    </div>
  );
}

export default Cart; // Export the Cart component
