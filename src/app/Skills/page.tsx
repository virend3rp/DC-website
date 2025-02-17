"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Define types for skills and training data
interface Skill {
  category: string;
  tools: string;
}

interface Training {
  title: string;
  description: string;
}

// Star Badge component with hover animations
const StarBadge: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <motion.div
    className="flex flex-col items-center space-y-2 transform transition-all duration-300 ease-in-out"
    whileHover={{ scale: 1.1, boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)' }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="w-20 h-20 flex items-center justify-center bg-yellow-500 rounded-full shadow-xl relative hover:shadow-2xl transition-shadow duration-300">
      <span className="absolute text-4xl font-bold text-white">{`★`}</span>
    </div>
    <div className="text-center text-sm font-semibold text-white hover:text-yellow-400 transition-colors duration-300">
      <h4>{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const skillsData: Skill[] = [
    {
      category: 'Mechanical Design Tools',
      tools: 'Fusion360, Inventor, SolidWorks, Abaqus',
    },
    {
      category: 'Simulation and Control Tools',
      tools: 'Matlab, Arduino, LabVIEW',
    },
    {
      category: 'Programming Tools',
      tools: 'C++, Matlab, Python',
    },
    {
      category: 'Animation Tools',
      tools: 'Maya, Adobe Premiere',
    },
    {
      category: 'Editing Tools',
      tools: 'Adobe Illustrator, Microsoft Visio',
    },
    {
      category: 'Office Tools',
      tools: 'Microsoft Word, PowerPoint, LaTeX',
    },
    {
      category: '3D Printing',
      tools: 'Familiar with solid, soft, and metallic 3D printers',
    },
  ];

  const trainingData: Training[] = [
    {
      title: 'KUKA Robot Programming',
      description: 'Basic and advanced programming of KUKA Robot at the Indian Institute of Technology Delhi, India (2012).',
    },
    {
      title: 'Fundamentals of Space Vehicle Mechanisms',
      description: 'Technical course at the Johnson Space Center, NASA, USA (2022).',
    },
    {
      title: 'Teleoperation of a Robot',
      description: 'Short-term training on Master/Slave manipulator at the Bhabha Atomic Research Centre (BARC), Mumbai, India (2014).',
    },
    {
      title: 'Real-Time Simulation for Spacecraft',
      description: 'Short-term training on dynamics and real-time simulation for spacecraft at the Jet Propulsion Laboratory (JPL), NASA, Pasadena, California, USA (2019).',
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-6">
      <div className="w-full max-w-4xl space-y-8">
        {/* Skills Section */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          🚀 Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8 justify-center">
          {skillsData.map((skill, index) => (
            <StarBadge key={index} title={skill.category} description={skill.tools} />
          ))}
        </div>

        {/* Training Programs Section */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎓 Training Programs
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {trainingData.map((training, index) => (
            <StarBadge key={index} title={training.title} description={training.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
