const ProductCard = ({product})=>{
    return (
        <div className="border rounded-lg shadow-lg px-4">
            <img src="product.image" alt="product.name" className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-pink-500">{product.price}</p>
            <button className="bg-pink-500 text-white px-4 rounded mt-2 hover:bg-pink-600">Add to cart</button>
        </div>
    );
};
export default ProductCard;