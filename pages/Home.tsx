import React from 'react';
import { ArrowRight, CheckCircle, Users, HeartHandshake, Globe, Camera } from 'lucide-react';
import Button from '../components/Button';
import { PROGRAMS, DONATION_TIERS, GALLERY_IMAGES } from '../constants';
import { Link } from 'react-router-dom';

interface HomeProps {
  onDonateClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onDonateClick }) => {
  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=4" 
            alt="Smiling children" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
            Igniting Hope, <br />
            <span className="text-orange-500">Transforming Lives.</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl mb-8 font-light leading-relaxed">
            Join the movement to provide education, healthcare, and dignity to the most vulnerable communities in India. Your small contribution creates a massive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={onDonateClick}>
              Donate Now
            </Button>
            <Link to="/about">
              <Button variant="white" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50,000+</h3>
              <p className="text-gray-600 font-medium">Lives Impacted</p>
            </div>
            <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-600 rounded-full mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">120+</h3>
              <p className="text-gray-600 font-medium">Villages Covered</p>
            </div>
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600 font-medium">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Our Key Programs</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We focus on holistic development through targeted initiatives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{program.description}</p>
                  <Link to="/programs" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-900">Impact in Action</h2>
                  <p className="mt-2 text-gray-600">Glimpses from our recent activities on the ground.</p>
               </div>
               <Link to="/gallery" className="hidden sm:inline-flex items-center text-orange-600 font-medium hover:text-orange-700">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {GALLERY_IMAGES.slice(0, 4).map((img) => (
                  <Link to="/gallery" key={img.id} className="group relative rounded-xl overflow-hidden aspect-square">
                     <img src={img.src} alt={img.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                  </Link>
               ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
               <Link to="/gallery" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700">
                  View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
            </div>
         </div>
      </section>

      {/* Quick Donate CTA */}
      <section className="py-20 bg-teal-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-teal-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-800 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">Make a Difference Today</h2>
          <p className="text-teal-100 mb-10 max-w-2xl mx-auto">
            Choose a cause close to your heart and help us create a brighter future.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {DONATION_TIERS.map((tier) => (
              <div key={tier.value} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer group" onClick={onDonateClick}>
                <div className="text-2xl font-bold text-white mb-2">{tier.label}</div>
                <div className="text-teal-100 text-sm group-hover:text-white">{tier.desc}</div>
              </div>
            ))}
          </div>
          
          <Button variant="primary" size="lg" onClick={onDonateClick}>
            Donate Any Amount
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;