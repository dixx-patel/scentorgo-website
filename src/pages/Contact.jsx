const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            If you have any questions, inquiries, or would like to discuss a project, please feel free to reach out to us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl shrink-0 border border-gray-100">📍</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Head Office</h4>
                <p className="text-gray-600 mt-1">80, Office No.180, Una Road,<br/>Dolasa, Kodinar - 362720,<br/>Gir Somnath, Gujarat, India.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl shrink-0 border border-gray-100">📞</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Phone</h4>
                <p className="text-gray-600 mt-1">+91 84900 54441 <br/> +91 84018 94441</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl shrink-0 border border-gray-100">✉️</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                <p className="text-gray-600 mt-1">info@scentorgo.com <br/> sales@scentorgo.com</p>
              </div>
            </div>
          </div>

         
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-white" />
                <input type="text" placeholder="Company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-white" />
              </div>
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-white" />
              <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-white resize-none"></textarea>
              <button type="button" className="bg-gray-900 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-xl transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;