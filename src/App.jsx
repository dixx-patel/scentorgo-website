import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      {/* pt-20 adds padding to the top so the fixed navbar doesn't cover content */}
      <div className="pt-20"> 
        <Home />
        <About />
        <Products />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;