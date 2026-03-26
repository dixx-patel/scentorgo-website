import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ImageGallery from "./pages/Imagegallery"; 

import HerbalPage from "./pages/HerbalPage";
import AgriculturalPage from "./pages/AgriculturalPage";
import OrganicPage from "./pages/OrganicPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="bg-white text-gray-800 font-sans">
        <Navbar />
        <div className="pt-20"> 
          <Routes>
            {/* We assign each component to its own specific path */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<ImageGallery />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Your existing product category routes stay exactly the same */}
            <Route path="/herbal-products" element={<HerbalPage />} />
            <Route path="/agricultural-products" element={<AgriculturalPage />} />
            <Route path="/organic-fertilizers" element={<OrganicPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;