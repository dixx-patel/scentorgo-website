const Home = () => {
  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 bg-gray-50">
      
      <div className="max-w-4xl mx-auto">
        <p className="text-green-600 font-semibold tracking-widest uppercase mb-4">
          Welcome to Scentorgo Overseas
        </p>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Live Naturally, <br />
          <span className="text-green-700">Live Herbal</span>
        </h1>
        
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Bringing the healing power of nature into everyday life with authentic, high-quality herbal extracts. A trusted exporter based in Gujarat, India.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#products" className="bg-green-700 hover:bg-green-800 transition px-8 py-3.5 rounded-full text-white font-semibold shadow-lg shadow-green-200">
            Explore Products ➔
          </a>
          <a href="#contact" className="bg-white hover:bg-gray-50 border border-gray-200 transition px-8 py-3.5 rounded-full text-gray-700 font-semibold shadow-sm">
            Contact Us
          </a>
        </div>
      </div>

    </section>
  );
};

export default Home;