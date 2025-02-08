"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
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

  const trainingData = [
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <motion.h1 
        className="text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Training Programs
      </motion.h1>
      
      <div className="w-full max-w-4xl space-y-6">
        <motion.div 
          className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {skillsData.map((skill, index) => (
              <li key={index}><span className="font-bold">{skill.category}:</span> {skill.tools}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-500"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Training Programs</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {trainingData.map((training, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">{training.title}:</span> {training.description}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
