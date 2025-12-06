import React from 'react';
import { PROGRAMS } from '../constants';
import Button from '../components/Button';

interface ProgramsProps {
  onDonateClick: () => void;
}

const Programs: React.FC<ProgramsProps> = ({ onDonateClick }) => {
  return (
    <div className="bg-white">
      <div className="bg-teal-900 py-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-white">Our Initiatives</h1>
        <p className="mt-4 text-teal-100 max-w-2xl mx-auto px-4">
          Comprehensive solutions for complex social challenges.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {PROGRAMS.map((program, index) => (
          <div key={program.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={program.image} alt={program.title} className="w-full h-[400px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex gap-8">
                    {program.stats?.map((stat, idx) => (
                       <div key={idx}>
                         <p className="text-2xl font-bold text-white">{stat.value}</p>
                         <p className="text-gray-300 text-xs uppercase tracking-wider">{stat.label}</p>
                       </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                Project Focus
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900">{program.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {program.description}
              </p>
              
              <div className="pt-4">
                 <h4 className="font-bold text-gray-900 mb-2">How we help:</h4>
                 <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                   <li>Conducting regular assessments to track progress.</li>
                   <li>Partnering with local communities for sustainable impact.</li>
                   <li>Ensuring transparency and accountability in every step.</li>
                 </ul>
                 
                 <Button onClick={onDonateClick}>Support this Project</Button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;