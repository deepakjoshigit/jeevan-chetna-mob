import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const activeImage = GALLERY_IMAGES.find(img => img.id === selectedImage);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl font-serif font-bold">Our Moments</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto px-4">
          Capturing the smiles, the effort, and the change we create together.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Tags (Visual Only for now) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Education', 'Health', 'Community', 'Empowerment'].map((tag, idx) => (
            <button 
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                idx === 0 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image) => (
            <div 
              key={image.id} 
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]"
              onClick={() => setSelectedImage(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">{image.category || 'General'}</span>
                <h3 className="text-white font-medium">{image.alt}</h3>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="max-w-5xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <p className="text-white text-lg font-medium">{activeImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;