import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ImageGallery from "./pages/Imagegallery";

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <div className="pt-20"> 
        <Home />
        <About />
        <Products />
        <ImageGallery />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;