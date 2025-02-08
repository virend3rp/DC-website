'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: 'easeInOut' } },
};

const Education = () => {
  const educationData = [
    {
      degree: 'Doctor of Philosophy (Ph.D.) in Robotics, Mechanical',
      institution: 'KOREATECH & KAIST, South Korea',
      duration: 'February 2016 – August 2020',
      dissertation: 'Development of Twisted String Actuator-based Assistive Upper Limb Exosuit',
    },
    {
      degree: 'Master of Technology (M.Tech.) in Robotics, Center for Energy',
      institution: 'Indian Institute of Technology Delhi, India',
      duration: 'August 2012 – May 2015',
      dissertation: 'Design and Simulation of Solar Panel Cleaning Robot Based on Inchworm Mechanism',
    },
    {
      degree: 'Bachelor of Technology (B.Tech.) in Electrical Engineering',
      institution: 'College of Technology and Engineering, Udaipur, Rajasthan, India',
      duration: 'July 2006 – June 2010',
      dissertation: 'Major: Electrical Engineering',
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
        Education
      </motion.h1>
      <svg width="100" height="20" viewBox="0 0 100 20" className="mb-6">
        <motion.path 
          d="M 10,10 L 90,10" 
          stroke="blue" 
          strokeWidth="2" 
          fill="transparent" 
          variants={pathVariants} 
          initial="hidden" 
          animate="visible"
        />
      </svg>
      <div className="w-full max-w-4xl space-y-6">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900">{edu.degree}</h2>
            <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
            <p className="text-gray-600 text-sm">{edu.duration}</p>
            <p className="mt-2 text-gray-800 text-sm"><span className="font-semibold">Dissertation:</span> {edu.dissertation}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
