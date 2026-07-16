import { Routes, Route } from "react-router-dom";

import './App.css'
import DummyJson from './pages/DummyJson'
import ProductDetail from './pages/ProductDetail'
function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<DummyJson />} />
            <Route
                path="/product/:id"
                element={<ProductDetail />}
            />
        </Routes>
        
    </>
  )
}
export default App