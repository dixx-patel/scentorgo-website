const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded"></div>
        </div>

        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a trusted manufacturer and exporter of premium herbal extracts, based in Gujarat, India. With a commitment to purity, quality, and sustainability, we specialize in delivering natural solutions that cater to the pharmaceutical, nutraceutical, cosmetic, and food industries worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6">👁️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To bring the healing power of nature into everyday life by offering authentic, high-quality herbal extracts that promote health, wellness, and sustainability.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3"><span className="text-green-600">✔</span> Provide pure, safe, and standardized extracts.</li>
              <li className="flex gap-3"><span className="text-green-600">✔</span> Ensure international quality testing standards.</li>
              <li className="flex gap-3"><span className="text-green-600">✔</span> Build long-term relationships via reliability.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;