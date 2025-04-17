"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const awardsData = [
  {
    title: "WearRAcon Innovation Challenge Award-2022, USA",
    description:
      "Head Motion Controlled Foldable Supplementary Robot Arm Exosuit for Construction Work: FSRA-Exosuit was selected as a finalist in WearRAcon Innovation Challenge Award-2022, USA.",
  },
  {
    title: "Top 10 in James Dyson Design Award-2021, South Korea",
    description:
      "Deployable and foldable drone arm (DFRA) for Covid-19 medical supply and foldable robotic arm for collaborative work (FRAC) were selected as finalists for James Dyson Design Award, South Korea, July 19, 2021.",
  },
  {
    title: "Creativity and Innovation Award-2021, South Korea",
    description:
      "Awarded for 'Bird's Nest Removal Technology from Electric Poles Using Drone's Folding Robot Arm' by the Korean Electrical Society, South Korea, July 15, 2021. (Prize money: $500)",
  },
  {
    title: "Samsung Electro-Mechanics Award-2021, South Korea",
    description:
      "Awarded for 'Foldable Drone Arm for stable Dust cleaning performance' by Korean Society of Electronic Engineering, South Korea, July 01, 2021. (Prize money: $300)",
  },
  {
    title: "Demo runner-up in Asia Haptics Conference",
    description:
      "A Novel Ferro-Fluid-based Fingertip Tactile Display for Concurrently Displaying Texture and Geometric Perception, in Asia Haptics-2018, San Francisco, USA.",
  },
  {
    title: "Gandhian Young Technological Innovation Awards (GYTI)",
    description:
      "Award received by the President of INDIA for innovation 'Inchworm mechanism for solar panel cleaning robot' at Rashtrapati Bhawan, New Delhi, INDIA, March 2015.",
  },
];

export default function Awards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [glowIndex, setGlowIndex] = useState<number | null>(null);

  const toggleAward = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white p-6 relative overflow-hidden"
      style={{
        backgroundColor: "#1f2937", // Dark background similar to experience page
      }}
    >
      {/* Main Heading */}
      <div className="relative z-10 mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-xl">
          AWARDS
        </h1>
      </div>

      {/* Award Cards Container */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {awardsData.map((award, i) => (
          <motion.div
            key={i}
            className="microchip-container"
            onClick={() => toggleAward(i)}
            onMouseEnter={() => setGlowIndex(i)}
            onMouseLeave={() => setGlowIndex(null)}
            layout
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div 
              className={`
                p-6 
                bg-gray-900 
                rounded-lg 
                border-4 
                ${glowIndex === i ? 'border-green-400' : 'border-yellow-500'} 
                relative 
                overflow-hidden
                shadow-lg
                cursor-pointer
              `}
              style={{
                boxShadow: glowIndex === i ? '0 0 15px #4ade80' : '0 0 10px rgba(234, 179, 8, 0.5)'
              }}
            >
              {/* Microchip pins */}
              <div className="absolute -bottom-1 left-0 w-full flex justify-between px-4">
                {[...Array(8)].map((_, pinIndex) => (
                  <div 
                    key={pinIndex} 
                    className="w-1 h-4 bg-yellow-500"
                  ></div>
                ))}
              </div>
              
              {/* LED indicator */}
              <div className="flex items-center mb-4">
                <div 
                  className={`w-3 h-3 rounded-full mr-2 ${openIndex === i ? 'bg-green-400' : 'bg-red-500'}`}
                  style={{
                    boxShadow: openIndex === i ? '0 0 10px #4ade80' : '0 0 10px rgba(239, 68, 68, 0.7)'
                  }}
                ></div>
                <div className="text-xs text-gray-400">AWARD-{i+1}</div>
                <div className="ml-auto text-xs text-yellow-500 font-mono">REF-{(i+1).toString().padStart(3, '0')}</div>
              </div>
              
              <h2 className="text-xl font-bold text-yellow-400 mb-2">
                {award.title}
              </h2>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-px bg-green-500 mb-4"></div>
                    <p className="text-gray-300 leading-relaxed">
                      {award.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Circuit component details */}
              <div className="absolute top-2 right-2 flex space-x-1">
                {[...Array(3)].map((_, dotIndex) => (
                  <div key={dotIndex} className="w-1 h-1 rounded-full bg-yellow-500"></div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
