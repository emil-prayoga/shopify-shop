import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaStar, FaChevronLeft } from "react-icons/fa";
function ProductDetail({addToCard}) {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => {

    async function getProduct() {

    try{
        const response = await fetch(
            `https://dummyjson.com/products/${id}`
        );
        if(!response.ok){
            throw new Error("Respon jaringan tidak baik")
        }
        const data = await response.json();
        setProduct(data);
    } catch(error){
            setError(error.message);
            setLoading(false);
    }finally {
        setLoading(false);
        }
    }
    getProduct();

}, [id]);

if (loading) {
    return <p>Loading...</p>;
}



if (error) {
    return <p>Error: {error}</p>;
}
    if (!product) {
    return <p>Loading...</p>;
}
    return (
        
    <div>
    <div className="bg-orange-600 text-white p-4 fixed top-0 left-0 w-full z-50">
       <div className="flex items-center justify-between">
    <Link to="/">
        <FaChevronLeft size={20} />
    </Link>

    <h1 className="font-bold text-2xl">Product Details</h1>

    <div className="w-5"></div>
</div>
    </div>
        <main className="pt-16">
        <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-72 object-contain bg-gray-100"
        />

        <div className="p-6">

            <h2 className="text-2xl font-bold">
                {product.title}
            </h2>

            {product.tags.length > 0 && (
                <div className="flex gap-2 mt-4 flex-wrap">
                    {product.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div className="flex items-center justify-between mt-4">
                <h3 className="text-3xl font-bold text-orange-600">
                    ${product.price}
                </h3>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-semibold">
                    {product.discountPercentage}% OFF
                </span>
            </div>

            <div className="mt-4">
                <h4 className="font-bold text-lg mb-2">
                    Description
                </h4>

                <p className="text-gray-600 leading-relaxed">
                    {product.description}
                </p>
            </div>

            <hr className="my-6 text-gray-500 color-gray-500" />
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-gray-500">Stock</span>
                    <span className="font-semibold">
                        {product.stock}
                    </span>
                </div>

                {product.brand && (
                    <div className="flex justify-between">
                        <span className="text-gray-500">Brand</span>

                        <span className="font-semibold">
                            {product.brand}
                        </span>
                    </div>
                )}

                <div className="flex justify-between">
                    <span className="text-gray-500">Category</span>
                    <span className="font-semibold">
                        {product.category}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">Rating</span>
                    <span className="font-semibold flex flex-row gap-2 items-center justify-center">
                    <div className="text-yellow-500"> <FaStar/> </div> {product.rating}
                    </span>
                </div>

            </div>

            <button
                onClick={() => {
                    addToCard(product);
                    navigate("/cart"); 
                }}
                className="flex flex-row gap-2 items-center justify-center w-full mt-8 bg-orange-600 hover:bg-orange-700 transition text-white font-semibold py-3 rounded-xl"
            >
                <FaShoppingCart/> Buy Now
            </button>
        </div>
        </main>
    </div>
) }

export default ProductDetail;