'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Awards = () => {
  const awardsData = [
    {
      title: 'WearRAcon Innovation Challenge Award-2022, USA',
      description: 'Head Motion Controlled Foldable Supplementary Robot Arm Exosuit for Construction Work: FSRA-Exosuit was selected as a finalist in WearRAcon Innovation Challenge Award-2022, USA.',
    },
    {
      title: 'Top 10 in James Dyson Design Award-2021, South Korea',
      description: 'Deployable and foldable drone arm (DFRA) for Covid-19 medical supply and foldable robotic arm for collaborative work (FRAC) were selected as finalists for James Dyson Design Award, South Korea, July 19, 2021.',
    },
    {
      title: 'Creativity and Innovation Award-2021, South Korea',
      description: 'Awarded for "Bird’s Nest Removal Technology from Electric Poles Using Drone’s Folding Robot Arm" by the Korean Electrical Society, South Korea, July 15, 2021. (Prize money: $500)',
    },
    {
      title: 'Samsung Electro-Mechanics Award-2021, South Korea',
      description: 'Awarded for "Foldable Drone Arm for stable Dust cleaning performance" by Korean Society of Electronic Engineering, South Korea, July 01, 2021. (Prize money: $300)',
    },
    {
      title: 'Demo runner-up in Asia Haptics Conference',
      description: 'A Novel Ferro-Fluid-based Fingertip Tactile Display for Concurrently Displaying Texture and Geometric Perception, in Asia Haptics-2018, San Francisco, USA.',
    },
    {
      title: 'Gandhian Young Technological Innovation Awards (GYTI)',
      description: 'Award received by the President of INDIA for innovation "Inchworm mechanism for solar panel cleaning robot" at Rashtrapati Bhawan, New Delhi, INDIA, March 2015.',
    },
    {
      title: 'Delhi Class of 89 Innovation Award',
      description: 'Shortlisted for the finalist of IIT Delhi Class of 89 Innovation Award 2015.',
    },
    {
      title: 'Young Professional Engineering Award',
      description: 'Awarded by the dean of College of Technology Engineering, Udaipur, Rajasthan, India, Sept 2015.',
    },
    {
      title: 'Best Paper Award',
      description: 'Received at the "National Conference on Solar Robotics", Jamia Milia Islamia, New Delhi, India, August 2015.',
    },
    {
      title: 'Junior Research Fellowship-2011, India',
      description: 'Recipient of a Junior Research Fellowship from the Department of Science and Technology (DST) India, August 2011.',
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
        Awards
      </motion.h1>
      <div className="w-full max-w-4xl space-y-6 relative">
        {awardsData.map((award, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-500 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900">{award.title}</h2>
            <p className="text-gray-700 mt-2">{award.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
