import React from 'react';

function Cart({ cart, removeFromCart }) {
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    `I would like to order:\n${cart.map((item) => `${item.name} - ${item.price}`).join('\n')}`
  )}`;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <ul className="list-disc pl-5">
          {cart.map((item, index) => (
            <li key={index} className='flex justify-between items-center'>
              {item.name} - {item.price}
              <button className='ml-1 border bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600' onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
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

export default Cart;
