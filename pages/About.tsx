import React from 'react';
import { TEAM, NGO_NAME, LEGAL_DETAILS, OTHER_REGISTRATIONS } from '../constants';
import { ShieldCheck, FileText, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We are a non-profit organization driven by the belief that every individual deserves a dignified life.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://picsum.photos/800/800?random=5" 
                alt="Community meeting" 
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To empower marginalized communities by providing access to quality education, essential healthcare, and sustainable livelihood opportunities, fostering a society rooted in equality and compassion.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A world where poverty does not dictate destiny, and every human being has the opportunity to realize their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Compliance Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-4">
               <ShieldCheck className="h-8 w-8 text-teal-700" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Legal & Compliance</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We value transparency. {NGO_NAME} is fully registered and compliant with Government of India regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Main Registrations Table */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="h-5 w-5 text-orange-600" /> Registration Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">CIN (MCA)</span>
                  <span className="font-mono font-medium text-gray-900 text-right">{LEGAL_DETAILS.cin}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">NGO Darpan ID</span>
                  <span className="font-mono font-medium text-gray-900 text-right">{LEGAL_DETAILS.darpan}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">CSR Registration</span>
                  <span className="font-mono font-medium text-gray-900 text-right">{LEGAL_DETAILS.csr}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">12A Registration</span>
                  <span className="font-mono font-medium text-gray-900 text-right">{LEGAL_DETAILS.reg12a}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">80G Registration</span>
                  <span className="font-mono font-medium text-gray-900 text-right">{LEGAL_DETAILS.reg80g}</span>
                </div>
                 <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Udyam / MSME</span>
                  <span className="font-mono font-medium text-gray-900 text-right">{LEGAL_DETAILS.udyam}</span>
                </div>
                 <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Startup India</span>
                  <span className="font-mono font-medium text-gray-900 text-right">{LEGAL_DETAILS.startupIndia}</span>
                </div>
              </div>
            </div>

            {/* Other IDs & Certs */}
            <div className="flex flex-col gap-6">
              <div className="bg-orange-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-600" /> Tax & Licenses
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 uppercase">PAN Card</div>
                    <div className="font-mono font-medium text-gray-900">{LEGAL_DETAILS.pan}</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 uppercase">TAN No</div>
                    <div className="font-mono font-medium text-gray-900">{LEGAL_DETAILS.tan}</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 uppercase">Licence No</div>
                    <div className="font-mono font-medium text-gray-900">{LEGAL_DETAILS.license}</div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-2xl p-6 sm:p-8 border border-teal-100 flex-grow">
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Other Registrations</h3>
                 <div className="flex flex-wrap gap-2">
                   {OTHER_REGISTRATIONS.map((reg, idx) => (
                     <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                       {reg}
                     </span>
                   ))}
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-gray-600">The dedicated individuals behind our impact.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEAM.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-orange-50">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-600 font-medium">{member.role}</p>
                {member.din && (
                  <p className="text-xs text-gray-400 mt-1">DIN: {member.din}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;