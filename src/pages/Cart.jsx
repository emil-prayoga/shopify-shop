import { Link } from "react-router-dom";
import {
    FaMinus,
    FaPlus,
    FaChevronLeft
} from "react-icons/fa";
function Cart({ cart }) {
    const totalHarga = cart.reduce((total,item)=> total + (item.price * item.quantity), 0);
    return(
        <>
         <header className="bg-orange-600 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="mx-auto flex items-center justify-between">
            <Link to="/">
                <FaChevronLeft
                    size={22}
                    className="hover:scale-110 transition"
                />
            </Link>

            <h1 className="text-2xl font-bold">
                Shopping Cart
            </h1>

            <div className="w-5"></div>
        </div>
    </header>

    {/* Content */}
    <main className="pt-28 pb-36 px-4 bg-gray-50 min-h-screen">

        <div className=" mx-auto">

            {cart.length === 0 ? (

                <div className="text-center mt-24">
                    <h2 className="text-2xl font-bold text-gray-700">
                        Your cart is empty
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Let's add some awesome products!
                    </p>

                    <Link
                        to="/"
                        className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl"
                    >
                        Continue Shopping
                    </Link>
                </div>

            ) : (

                <>
                    <div className="space-y-5">

                        {cart.map(item => (

                           <div
    key={item.id}
    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex justify-between items-center hover:shadow-md transition"
>

    {/* LEFT */}
    <div className="flex items-center gap-5">

        <div className="bg-gray-100 rounded-xl overflow-hidden p-2">
            <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-contain"
            />
        </div>

        <div className="space-y-2">

            <h3 className="text-xl font-bold">
                {item.title}
            </h3>

            <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                {item.category}
            </span>

            <p className="text-orange-600 text-xl font-bold">
                ${item.price}
            </p>

        </div>

    </div>

    {/* RIGHT */}
    <div className="flex flex-col items-center gap-4">

        <div className="flex items-center border rounded-xl overflow-hidden">

            <button
                className="w-11 h-11 hover:bg-gray-100 flex justify-center items-center transition"
            >
                <FaMinus />
            </button>

            <span className="w-12 text-center font-bold">
                {item.quantity}
            </span>

            <button
                className="w-11 h-11 hover:bg-orange-50 text-orange-600 flex justify-center items-center transition"
            >
                <FaPlus />
            </button>

        </div>

    </div>

</div>

                        ))}

                    </div>

                    {/* Checkout */}
                    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-5">

                        <div className=" mx-auto flex justify-between items-center">

                            <div>
                                <p className="text-gray-500">
                                    Total Payment
                                </p>

                                <h2 className="text-3xl font-bold text-orange-600">
                                    ${totalHarga.toFixed(2)}
                                </h2>
                            </div>

                            <button
                                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold"
                            >
                                Checkout
                            </button>

                        </div>

                    </div>

                </>
            )}

        </div>

    </main>
        </>
    )

}

export default Cart