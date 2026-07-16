import { FaTimes, FaShoppingCart, FaStar } from "react-icons/fa";

function ProductModal({ showModal, isClosing, handleClose }) {
    return  (
        <>
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

export default ProductModal