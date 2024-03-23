import ProductListing from "./components/product/ProductListing";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import CategoryBar from "./components/category/CategoryBar";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/product" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
const Layout = () => (
  <>
    <About />
    <CategoryBar />
    <ProductListing />
  </>
);
