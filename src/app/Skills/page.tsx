"use client";

import React, { useState } from 'react';
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

// Control Panel Gauge component
const GaugeComponent: React.FC<{ title: string; description: string; isSkill?: boolean }> = ({ 
  title, 
  description, 
  isSkill = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const gaugeValue = Math.floor(Math.random() * 30) + 70; // Random value between 70-100 for visual variety
  
  return (
    <motion.div
      className="relative bg-gray-900 border-2 border-blue-500 rounded-lg p-4 overflow-hidden"
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Connector lines at top */}
      <div className="absolute top-0 left-1/4 w-1 h-2 bg-blue-500"></div>
      <div className="absolute top-0 right-1/4 w-1 h-2 bg-blue-500"></div>
      
      {/* Status indicators */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full ${isHovered ? 'bg-green-400' : 'bg-blue-400'} animate-pulse mr-2`}></div>
          <span className="text-xs text-gray-400 font-mono">{isSkill ? 'SKILL_MODULE' : 'TRAINING_MODULE'}</span>
        </div>
        <div className="text-xs text-blue-400 font-mono">ID:{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}</div>
      </div>
      
      {/* Title */}
      <h3 className={`text-lg font-bold ${isSkill ? 'text-yellow-400' : 'text-teal-400'} mb-2`}>{title}</h3>
      
      {/* Gauge visualization */}
      <div className="w-full bg-gray-700 h-2 rounded-full mb-3 overflow-hidden">
        <motion.div 
          className={`h-full ${isSkill ? 'bg-yellow-500' : 'bg-teal-500'}`}
          initial={{ width: '0%' }}
          animate={{ width: `${gaugeValue}%` }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-300">{description}</p>
      
      {/* Technical details/decorations */}
      <div className="grid grid-cols-4 gap-1 mt-3">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="h-1 rounded-full"
            style={{ 
              backgroundColor: isHovered ? 
                (isSkill ? '#eab308' : '#14b8a6') : 
                '#374151',
              opacity: (i+1) * 0.25
            }}
          ></div>
        ))}
      </div>
      
      {/* Bottom connector */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-700 border-t border-blue-500"></div>
    </motion.div>
  );
};

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
    <div 
      className="min-h-screen bg-black flex flex-col items-center p-6 relative"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 30, 60, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%)',
        backgroundSize: 'cover',
      }}
    >
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%">
          <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="#2563eb" strokeWidth="1" />
            <circle cx="10" cy="10" r="2" fill="#3b82f6" />
            <circle cx="90" cy="10" r="2" fill="#3b82f6" />
            <circle cx="10" cy="90" r="2" fill="#3b82f6" />
            <circle cx="90" cy="90" r="2" fill="#3b82f6" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="#2563eb" strokeWidth="1" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="#2563eb" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuitPattern)" />
        </svg>
      </div>
      
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        {/* Main System Title */}
        <div className="text-center mb-10">
          <motion.div
            className="inline-block bg-black border-2 border-blue-500 rounded-lg px-6 py-3 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full animate-pulse bg-blue-500"></div>
              <h1 className="text-2xl font-bold text-blue-400 font-mono">ROBOTICS CONTROL PANEL</h1>
              <div className="w-4 h-4 rounded-full animate-pulse bg-blue-500"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <div className="space-y-6">
          <div className="flex items-center bg-gray-900 border-2 border-blue-500 rounded-lg p-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3 animate-pulse"></div>
            <motion.h2
              className="text-2xl font-bold text-blue-400"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              SKILLS MONITORING SYSTEM
            </motion.h2>
            <div className="ml-auto text-xs text-gray-400 font-mono">MODULES: {skillsData.length}</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <GaugeComponent title={skill.category} description={skill.tools} isSkill={true} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training Programs Section */}
        <div className="space-y-6 mt-16">
          <div className="flex items-center bg-gray-900 border-2 border-blue-500 rounded-lg p-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-teal-500 mr-3 animate-pulse"></div>
            <motion.h2
              className="text-2xl font-bold text-blue-400"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              TRAINING DATABASE INTERFACE
            </motion.h2>
            <div className="ml-auto text-xs text-gray-400 font-mono">ENTRIES: {trainingData.length}</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trainingData.map((training, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <GaugeComponent title={training.title} description={training.description} isSkill={false} />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* System Status Footer */}
        <motion.div 
          className="mt-16 border-t-2 border-blue-500 pt-4 flex justify-between items-center text-sm text-gray-400 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
            SYSTEM OPERATIONAL
          </div>
          <div>LAST UPDATE: {new Date().toLocaleDateString()}</div>
          <div>TOTAL MODULES: {skillsData.length + trainingData.length}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;