// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    category:'Facial products',
    name: 'Cocoa  butter formula products (Skin therapy face oil)',
    image: '/images/Cocoa_butter_formula.jpeg',
    price: 'ksh25',
    description: 'Skin Therapy Face Oil transforms your skin with a powerful blend of 10 pure precious oils, Retinol, Vitamin C and our exclusive Cetesomate-E® Complex.  Skin restorative oils along with natural Cocoa Butter, Retinol and Vitamin C deliver multi-purpose, anti-aging skin benefits.',
  },
  {
    id: 2,
    category:'General body',
    name: 'Hobby Marshmallow Vanilla Body Wash',
    image: '/images/Hobby_Marshmallow.jpeg',
    price: 'Ksh 15',
    description: 'Hobby Marshmallow Shower Gel, The Essential Fragrance of Your Shower Pleasure. Feel the indispensable scent of vanilla on your skin all day long. It moisturizes your skin with its creamy formula. It maintains pH balance. The heavenly formula, with delightful moisture-locking ingredients, transforms into rich, creamy bubbles, leaving your skin feeling softly smooth and superbly clean.',
  },
  {
    id: 3,
    category:'Body lotions',
    name: 'NIVEA Cool Kick Body Lotion for Men - Refreshing Cooling and 48-Hour Moisture',
    image: '/images/Nivea_men.jpeg',
    price: 'Ksh10',
    description: 'Experience a refreshing, freshly showered feeling with NIVEA Cool Kick Body Lotion for Men. This body lotion offers an instant and long-lasting cooling effect while delivering intensive 48-hour moisture. Its fast-absorbing formula ensures no sticky residue, providing comfort and hydration all day.',
  },
  {
    id: 4,
    category:'body lotions',
    name: 'Oh So Heavenly Creme Oil Body Lotion Pure Honey & Almond Oil 720ml',
    image: '/images/Oh_So_Heavenly.jpeg',
    price: 'Ksh100',
    description: 'Oh So Heavenly Creme Oil Collection Pure Honey & Almond Oil Nourishing Body Lotion 720ml contains a hint of almond oil blended with honey extract to create a melange of moisturising cream and caring oil. This delectable fragrance is a soothing calming blend of powdery notes with a comforting base of sweet amber, musk and the slightest hint of creamy vanilla.',
  },
  {
    id:5,
    category:'body cream',
    name:'Pro White vitamin C Tumeric Cream',
    image:'/images/Pro_white_tumeric.jpeg',
    price: 'Ksh 300',
    description:'Ten Pure Oils help moisturize and smooth fine lines and wrinkles while Retinol and Vitamin C help improve and brighten tone and texture. This lightweight, non-greasy formula absorbs quickly, while the Cetesomate Complex helps deliver all of the essential vitamins and nutrients directly into the epidermal layer of the skin. Skin looks younger-looking with a more glowing and firm appearance.'
  },
  {
    id:6,
    category:'Skin products',
    name:'Ingrams Skin doctor',
    image:'/images/Ingram.jpeg',
    price:'Ksh 260',
    description:'Ingram’s Camphor Cream Herbal 150ml helps to restore moisture and repair very dry, chapped skin with a rich blend of glycerine and moisturising ingredients.'
  }
];

const Footer = ()=>{
  const CurrentYear = new Date().getFullYear();
  return (
    <footer className='text-center bg-gray-300 p-4 font-bold'>
      <p>&copy; {CurrentYear} Pampers Bliss. All rights reserved.</p>
    </footer>
  );
};

function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded p-4 flex flex-col items-center bg-pink-100 hover:shadow-2xl transition-shadow duration-300">
      <img src={product.image} alt={product.name} className="w-30 h-30 object-cover mb-4" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => alert(product.description)}
      >
        View Details
      </button>
      <button
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

function Cart({ cart, removeFromCart }) {
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
    `I would like to order: \n${cart.map((item) => `${item.name} - ${item.price}`).join('\n')}`
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

function App() {
  const [cart, setCart] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeFromCart =(index)=> {
    setCart((prevCart)=> prevCart.filter((_, i) => i !==index));
  };
  const categories = [...new Set(products.map((product) => product.category))];
  const filteredProducts = products.filter((product) => {
    const matchesCategory  = categoryFilter ? product.category === categoryFilter: true;
    const matchesSearch  = product.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4 bg-green-200 flex flex-wrap items-center justify-between p-4">
          <div>
            <Link to="/" className="text-blue-500 font-extrabold pl-2 hover:underline mr-6">Home</Link>
            <Link to="/cart" className="text-blue-500 font-extrabold hover:underline mr-6">Cart</Link>
          </div>
          <div>
            <select
              className='mr-4 p-2 rounded border'
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <input 
              type="text" 
              placeholder='Search products...'
              className='p-2 border rounded'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </nav>
        <h1 className='text-center font-extrabold pb-4 text-black'>PAMPERING BLISS</h1>

        
        

        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            }
          />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
