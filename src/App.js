import Header from "./components/navbar/Navbar";
import ProductListing from "./components/product/ProductListing";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <div className="App">
            <Header />
            <About />
            <ProductListing />
            <Footer />
        </div>
    </div>
  );
}

export default App;
