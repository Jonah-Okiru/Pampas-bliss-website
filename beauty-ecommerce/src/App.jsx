import React, { useState } from 'react'; // Import React and useState for state management
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import routing components
import HomePage from './pages/HomePage'; // Import HomePage component
import CartPage from './pages/CartPage'; // Import CartPage component
import Footer from './components/Footer'; // Import Footer component
import products from './data/products'; // Import product data

function App() {
  // State to manage the cart items
  const [cart, setCart] = useState([]);
  // State for filtering product by category
  const [categoryFilter, setCategoryFilter] = useState('');
  // State for searching product by name
  const [searchQuery, setSearchQuery] = useState('');
  // State for tracking which product is expanded for details
  const [expandedProductId, setExpandedProductId] = useState(null);
  // State to store the filtered product list
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove a product from the cart by index
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Get unique product categories from the product list
  const categories = [...new Set(products.map((product) => product.category))];

  // Function to filter products based on category and search query
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
        {/* Navigation Bar */}
        <nav className="mb-4 bg-green-200 flex flex-wrap items-center justify-between p-4">
          <div className='flex items-center'>
            {/* Logo linking to the home page */}
            <Link to="/">
              <img src="/images/logo.png" alt="Pampering Bliss logo"  className='h-12 mr-4'/>
            </Link>
            {/* Navigation Links */}
            <Link to="/" className="text-blue-500 font-extrabold pl-2 hover:underline mr-6">Home</Link>
            <Link to="/cart" className="text-blue-500 font-extrabold hover:underline mr-6">Cart</Link>
          </div>
          
          {/* Filter and Search Section */}
          <div>
            {/* Category Dropdown Filter */}
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
            {/* Search Input Field */}
            <input
              type="text"
              placeholder='Search products...'
              className='p-2 border rounded'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Search Button */}
            <button
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </nav>
        
        {/* Routes for different pages */}
        <Routes>
          {/* Home Page Route with props for filtering and cart */}
          <Route path="/" element={<HomePage products={filteredProducts} addToCart={addToCart} expandedProductId={expandedProductId} setExpandedProductId={setExpandedProductId} />} />
          {/* Cart Page Route with cart and removeFromCart function */}
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App; // Export the App component for use in the main entry file
