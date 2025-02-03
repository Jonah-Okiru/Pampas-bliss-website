import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import products from './data/products';

function App() {
  const [cart, setCart] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const categories = [...new Set(products.map((product) => product.category))];

  const handleSearch = () => {
    const filtered = products.filter((product) => {
      const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
      const matchesSearch = searchQuery? product.name.toLowerCase().includes(searchQuery.toLowerCase()):true;
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4 bg-green-200 flex flex-wrap items-center justify-between p-4">
          <div className='flex items-center'>
            <Link to="/">
              <img src="/images/logo.png" alt="Pampering Bliss logo"  className='h-12 mr-4'/>
            </Link>
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
            <button
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage products={filteredProducts} addToCart={addToCart} expandedProductId={expandedProductId} setExpandedProductId={setExpandedProductId} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
