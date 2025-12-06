import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { NGO_HEAD_OFFICE, NGO_EMAIL, NGO_NAME, NGO_PHONE, LEGAL_DETAILS, SOCIAL_LINKS } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white">
                 <Heart className="h-4 w-4 fill-current" />
              </div>
              <span className="font-serif font-bold text-xl">{NGO_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to uplifting the underprivileged through sustainable programs in education, healthcare, and livelihood.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              {/* Added a generic social icon for future use if twitter/others are added */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{NGO_HEAD_OFFICE}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-orange-600 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{NGO_PHONE}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-orange-600 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{NGO_EMAIL}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (Visual Only) */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-500">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest impact stories.</p>
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm space-y-1">
             <p>© {new Date().getFullYear()} {NGO_NAME}. All rights reserved.</p>
             <p className="text-xs text-gray-600">CIN: {LEGAL_DETAILS.cin} | DARPAN ID: {LEGAL_DETAILS.darpan}</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="text-gray-600 text-xs">Privacy Policy</span>
             <span className="text-gray-600 text-xs">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;