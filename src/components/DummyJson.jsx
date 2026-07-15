import { useState, useEffect } from "react";
import { FaInfoCircle, FaTimes, FaShoppingCart, FaStar } from "react-icons/fa";
function DummyJson() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    useEffect(()=>{
        async function getProducts() {
            try {
                const response = await fetch("https://dummyjson.com/products")
                if(!response.ok){
                    throw new Error("Respon jaringan tidak baik")
                }
                const dataProducts = await response.json();
                    setProducts(dataProducts.products);
                    setLoading(false);
            } catch(error) {
                setError(error.message);
                setLoading(false);
            }
        }
        getProducts();    
    }, []);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [showModal]);

    const handleClose = () => {
        setIsClosing(true); 
        setTimeout(() => {
            setShowModal(null);
            setIsClosing(false); 
        }, 1200); 
    };

    if (loading) {
        return <p className="p-4">Loading...</p>;
    }

    if(error) {
        return <p className="p-4 text-red-500">Error: {error}</p> ;           
    }

    return(
        <>   
        <header className="bg-orange-600 text-white font-bold flex items-center justify-center fixed top-0 left-0 w-full p-4 z-10">
            <h2 className="text-2xl">Shopify Shop</h2>
        </header>
        
        <div className="pt-20 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 bg-gray-100  text-gray-900 md:hover:-translate-y-2 md:hover:shadow-xl   ">
            {products.map((product) => (
                <div key={product.id} className="p-4 space-y-2 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-2  active:-translate-y-2 active:shadow-lg  transition-all duration-200 ease-out ">
                    <img 
                        src={product.thumbnail} 
                        alt={product.title} 
                        className="w-full h-56 object-contain object-center hover:scale-105 transition-transform duration-300"
                        loading="lazy "
                    />
                    <h3 className="text-2xl font-bold">{product.title}</h3>
                    <p className="text-md text-gray-600 font-medium line-clamp-2 overflow-hidden">{product.description}</p>
                    <p className="font-bold text-xl text-orange-600">${product.price}</p>
                    <button onClick={()=>setShowModal(product)} className="flex flex-row gap-2 items-center justify-center w-full mt-4 bg-orange-600 hover:bg-orange-700 transition text-white font-semibold py-3 rounded-xl">
                        <FaInfoCircle/> View Product Details
                    </button>
                </div>
                
            ))}
        </div>
        
        {showModal && (
            <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-center z-50 p-4">
                <div className={
                    `bg-white rounded-2xl max-w-xl w-full mx-4 relative overflow-hidden
                    ${ isClosing ? "animate-[hideModal_1.2s_ease-in_forwards]" : "animate-[showModal_1.2s_ease-out_forwards]"
                }`}>
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
                >
                    <FaTimes size={22} />
                </button>

                <img
                    src={showModal.thumbnail}
                    alt={showModal.title}
                    className="w-full h-72 object-contain bg-gray-100"
                />

                <div className="p-6">

                    <h2 className="text-2xl font-bold">
                        {showModal.title}
                    </h2>

                    {showModal.tags.length > 0 && (
                        <div className="flex gap-2 mt-4 flex-wrap">
                            {showModal.tags.map((tag) => (
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
                            ${showModal.price}
                        </h3>

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-semibold">
                            {showModal.discountPercentage}% OFF
                        </span>
                    </div>

                    <div className="mt-4">
                        <h4 className="font-bold text-lg mb-2">
                            Description
                        </h4>

                        <p className="text-gray-600 leading-relaxed">
                            {showModal.description}
                        </p>
                    </div>

                    <hr className="my-6 text-gray-500 color-gray-500" />
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Stock</span>
                            <span className="font-semibold">
                                {showModal.stock}
                            </span>
                        </div>

                        {showModal.brand && (
                            <div className="flex justify-between">
                                <span className="text-gray-500">Brand</span>

                                <span className="font-semibold">
                                    {showModal.brand}
                                </span>
                            </div>
                        )}

                        <div className="flex justify-between">
                            <span className="text-gray-500">Category</span>
                            <span className="font-semibold">
                                {showModal.category}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Rating</span>
                            <span className="font-semibold flex flex-row gap-2 items-center justify-center">
                               <div className="text-yellow-500"> <FaStar/> </div> {showModal.rating}
                            </span>
                        </div>

                    </div>

                    <button
                        className="flex flex-row gap-2 items-center justify-center w-full mt-8 bg-orange-600 hover:bg-orange-700 transition text-white font-semibold py-3 rounded-xl"
                    >
                        <FaShoppingCart/> Buy Now
                    </button>
                </div>
            </div>
         </div> 
        )}
        </>
    )
}
export default DummyJson