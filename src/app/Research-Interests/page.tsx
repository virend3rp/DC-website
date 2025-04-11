"use client"

import React from 'react';

interface ResearchInterest {
  title: string;
  description: string;
}

const ResearchInterestsPage: React.FC = () => {
  // const [expandedCard, setExpandedCard] = useState<string | null>(null);
  
  const researchInterests: ResearchInterest[] = [
    {
      title: "Soft Actuators",
      description: "The conventional actuators used in exosuits make it challenging to design compact, lightweight, and wearable systems. My work focuses on developing soft twisted string actuators (TSAs) that replace rigid actuation systems, making wearables more portable, efficient, and comfortable.",
    },
    {
      title: "Exoskeleton and Exosuit",
      description: "Exosuits assist in rehabilitation, telemanipulation, and human-machine interaction. I am designing a fully portable, compact exosuit that integrates active textiles for daily use, providing assistance without bulkiness.",
    },
    {
      title: "Metamorphic Drone Arm with a Gripper",
      description: "A reconfigurable drone arm with a gripper can operate in hazardous environments. It has applications in parcel delivery, inspection, aerial manipulation, and remote-controlled tasks.",
    }
  ];

  // const toggleCard = (title: string) => {
  //   if (expandedCard === title) {
  //     setExpandedCard(null);
  //   } else {
  //     setExpandedCard(title);
  //   }
  // };

  return (
    <div className="min-h-screen w-full bg-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Research Interests</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchInterests.map((interest) => (
            <div 
              key={interest.title}
              className="relative group"
            >
              {/* Outer glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-0"></div>
              
              {/* Main card */}
              <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 h-full relative z-10">
                {/* Status indicator light - red by default, green on hover */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red-500 group-hover:bg-green-500 transition-colors duration-300"></div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{interest.title}</h3>
                  </div>
                  
                  <p className="text-gray-300">{interest.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchInterestsPage;