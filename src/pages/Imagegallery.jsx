import React from 'react';

const ImageGallery = () => {
  // Remember to replace these with your actual image names from the public folder
  const images = [
    "/products.jpeg", 
    "/services.jpeg",
    "/storage.jpeg",
    "/shipping.jpeg"
  ];

  return (
    <section className="py-12 bg-white">
      {/* I slightly reduced the max-width to make the 2x2 layout look more cohesive */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Changed the grid to stay 2 columns on tablet and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group cursor-pointer">
              <img 
                src={src} 
                alt={`Scentorgo Overseas Gallery ${index + 1}`} 
                className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImageGallery;