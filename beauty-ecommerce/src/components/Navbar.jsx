const Navbar = () =>{
    return (
        <nav className="bg-pink-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Pampa Bliss Products</h1>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/products" className="hover:underline">Products</a></li>
                    <li><a href="/contacts" className="hover:underline">Contacts</a></li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;