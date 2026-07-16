import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function ProductCard({ product }) {

    return (
        <>
        <div className="p-4 space-y-2 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-200">

            <div className="overflow-hidden rounded-xl bg-gray-100">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-56 bg-gray-50 object-contain transition-transform duration-300 hover:scale-105"
                />
            </div>

            <h3 className="text-2xl font-bold">
                {product.title}
            </h3>

            <p className="text-md text-gray-600 line-clamp-2">
                {product.description}
            </p>

            <p className="font-bold text-xl text-orange-600">
                ${product.price}
            </p>

            <Link
                to={`/product/${product.id}`}
                className="flex gap-2 items-center justify-center w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl"
            >
                <FaInfoCircle />
                View Product Details
            </Link>

        </div>
        </>
    )

}

export default ProductCard