import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css'
import DummyJson from './pages/DummyJson'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  function addToCard(product){
    if (!product) return;
  
    const isExist = cart.find((item) => item.id === product.id);
    if (isExist){
        const updatedCart = cart.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
        setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // Hapus baris "addToCard()" yang tadi ada di sini!
  console.log("Isi keranjang saat ini:", cart);

  function onUpdateQuantity(productId, quantityNew) {
   
    if (quantityNew < 1) {
     setCart(cart.filter((item) => item.id != productId));
     } else {     
    const updatedCart = cart.map((item) => {
      if (item.id == productId) {
        return {...item, quantity: quantityNew}
      } else {
        return item;
      }
    });
    setCart(updatedCart);
  }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<DummyJson />} />
        <Route path="/product/:id" element={<ProductDetail addToCard={addToCard} />} />
        <Route path="/cart" element={<Cart cart={cart} onUpdateQuantity={onUpdateQuantity}/>} />
      </Routes>
    </>
  );
}

export default App;