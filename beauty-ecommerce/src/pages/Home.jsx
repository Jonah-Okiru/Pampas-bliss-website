import ProductCard from "../components/ProductCard";
const products = [
    { id: 1, name: "Lipstick", description: "Matte finish", price: 20, image: "/lipstick.jpg" },
    { id: 2, name: "Foundation", description: "Flawless coverage", price: 35, image: "/foundation.jpg" },
    { id: 3, name: "Eyeliner", description: "Waterproof", price: 15, image: "/eyeliner.jpg" },
  ];
  const Home = ()=>{
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
            <div className="grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) =>(
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
  };
  export default Home;