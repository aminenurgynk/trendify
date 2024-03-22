import Navbar from "./components/navbar/Navbar";
import ProductListing from "./components/product/ProductListing";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import CategoryBar from "./components/category/CategoryBar";

function App() {
  return (
    <div className="App">
        <div className="App">
            <Navbar />
            <About />
            <CategoryBar />
            <ProductListing />
            <Footer />
        </div>
    </div>
  );
}

export default App;
