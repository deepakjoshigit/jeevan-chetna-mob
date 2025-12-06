import React from 'react';
import { Mail, Phone, MapPin, Send, Building2, Map } from 'lucide-react';
import { NGO_HEAD_OFFICE, NGO_WORKING_OFFICE, NGO_EMAILS, NGO_PHONE, BANK_DETAILS, SOCIAL_LINKS } from '../constants';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-gray-600">Have questions or want to volunteer? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          
          {/* Contact Info Side */}
          <div className="bg-orange-600 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-orange-200 uppercase text-xs mb-2 tracking-wider">Head Office</h3>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-white text-base leading-relaxed">{NGO_HEAD_OFFICE}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-orange-200 uppercase text-xs mb-2 tracking-wider">Working Address</h3>
                  <div className="flex items-start">
                    <Building2 className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-white text-base leading-relaxed">{NGO_WORKING_OFFICE}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-orange-500">
                  <div className="flex items-start mb-4">
                    <Phone className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-white text-lg">{NGO_PHONE}</p>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                    <div className="flex flex-col">
                      {NGO_EMAILS.map((email, idx) => (
                        <p key={idx} className="text-white text-base">{email}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href={SOCIAL_LINKS.map} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group relative h-48 rounded-xl overflow-hidden bg-orange-700/50 hover:shadow-lg transition-all"
              >
                 <img src="https://picsum.photos/600/400?blur=2" className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity" alt="Map Location" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white flex items-center group-hover:bg-white/30 transition-colors">
                      <Map className="w-4 h-4 mr-2" />
                      View on Google Maps
                    </div>
                 </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required></textarea>
              </div>

              <Button type="submit" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Bank Details Section for Offline Donations */}
        <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
           <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-teal-100 p-4 rounded-full text-teal-700">
                <Building2 className="h-8 w-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Donate via Bank Transfer</h3>
                <p className="text-gray-600 mb-4">You can also make direct contributions to our bank account. All donations are tax-exempt under 80G.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                     <p className="text-xs text-gray-500 uppercase font-semibold">Bank Name</p>
                     <p className="font-medium text-gray-900">{BANK_DETAILS.bankName}</p>
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 uppercase font-semibold">Account Number</p>
                     <p className="font-mono font-medium text-gray-900">{BANK_DETAILS.accountNumber}</p>
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 uppercase font-semibold">IFSC Code</p>
                     <p className="font-mono font-medium text-gray-900">{BANK_DETAILS.ifscCode}</p>
                  </div>
                  <div>
                     <p className="text-xs text-gray-500 uppercase font-semibold">Account Name</p>
                     <p className="font-medium text-gray-900">{BANK_DETAILS.accountName}</p>
                  </div>
                </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;