/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} exact />
          <Route path="/product/:productId" element={<ProductDetail />} exact />
          <Route path="*" element={<div>404 Not Found!</div>} />
        </Routes>
    </div>
  );
}

export default App;
