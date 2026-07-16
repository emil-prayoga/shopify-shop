import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function DummyJson() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
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

    if (loading) {
        return <p className="p-4">Loading...</p>;
    }

    if(error) {
        return <p className="p-4 text-red-500">Error: {error}</p> ;           
    }

    return(
        <>   
        <Navbar />

        <div className="pt-24 px-4 py-4 grid grid-cols-[repeat(auto-fit,minmax(375px,1fr))] gap-4  text-gray-900">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </>
    )
}
export default DummyJson