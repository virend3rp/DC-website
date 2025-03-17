"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const educationData = [
  {
    degree: "Doctor of Philosophy (Ph.D.) in Robotics, Mechanical",
    institution: "KOREATECH & KAIST, South Korea",
    duration: "February 2016 – August 2020",
    dissertation: "Development of Twisted String Actuator-based Assistive Upper Limb Exosuit",
    logo: "/koreatech-kaist.png", // Add your image path
  },
  {
    degree: "Master of Technology (M.Tech.) in Robotics, Center for Energy",
    institution: "Indian Institute of Technology Delhi, India",
    duration: "August 2012 – May 2015",
    dissertation: "Design and Simulation of Solar Panel Cleaning Robot Based on Inchworm Mechanism",
    logo: "/iit-delhi.png", // Add your image path
  },
  {
    degree: "Bachelor of Technology (B.Tech.) in Electrical Engineering",
    institution: "College of Technology and Engineering, Udaipur, Rajasthan, India",
    duration: "July 2006 – June 2010",
    dissertation: "Major: Electrical Engineering",
    logo: "/cte-udaipur.png", // Add your image path
  },
];

export default function Education() {
  const [beltPosition, setBeltPosition] = useState(0);
  
  // Animation for the conveyor belt
  useEffect(() => {
    const animateBelt = () => {
      setBeltPosition((prev) => (prev + 1) % 35); // Loop every 35 pixels (matching the mark spacing)
    };
    
    const intervalId = setInterval(animateBelt, 100); // Update every 100ms
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-12 px-6 bg-gray-900 flex flex-col items-center text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#4B5563" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Factory Control Panel Header */}
      <div className="relative z-10 mb-10 w-full max-w-4xl">
        <div className="bg-gray-800 border-2 border-yellow-400 rounded-lg p-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-2"></div>
            <h2 className="text-2xl font-bold text-yellow-400">EDUCATION</h2>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-700 px-2 py-1 rounded font-mono text-xs text-yellow-300 mr-2">
              UNITS: {educationData.length}
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Assembly Line */}
      <div className="relative w-full max-w-4xl">
        {/* Conveyor Belt */}
        <div className="absolute left-1/2 top-0 w-16 bg-gray-700 transform -translate-x-1/2 rounded-sm border-t-2 border-b-2 border-yellow-500"
          style={{ height: `${educationData.length * 280}px` }}
        >
          {/* Animated Conveyor Belt Markings */}
          <div className="relative h-full w-full overflow-hidden">
            {/* Create more marks than needed to ensure smooth looping */}
            {[...Array(Math.ceil((educationData.length * 280) / 35) + 10)].map((_, i) => (
              <div 
                key={i} 
                className="absolute left-1/2 w-12 h-1 bg-yellow-500 opacity-30 transform -translate-x-1/2"
                style={{ 
                  top: `${(i * 35) - beltPosition}px`, 
                  transition: "top 100ms linear"
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Assembly Line Stations */}
        <div className="space-y-36 w-full relative">
          {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Station Number */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full z-20 text-sm">
                STATION {educationData.length - index}
              </div>
              
              {/* Assembly Line Station */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
                className="relative w-full flex justify-center"
              >
                {/* Main Education Card */}
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(245, 158, 11, 0.5)" }}
                  className="w-1/2 bg-gray-800 rounded-lg shadow-lg border-2 border-yellow-400 p-4 z-10"
                >
                  <div className="flex items-start">
                    {/* Institution Logo */}
                    {edu.logo && (
                      <div className="w-12 h-12 mr-3 relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gray-700 rounded-full animate-pulse"></div>
                        <Image src={edu.logo} alt={edu.institution} width={48} height={48} className="rounded-full relative z-10" />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      {/* Education Details */}
                      <h3 className="text-lg font-semibold text-yellow-400">{edu.degree}</h3>
                      <div className="flex items-center mt-1">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-1.5"></div>
                        <p className="text-sm text-gray-300">{edu.duration}</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-white">{edu.institution}</p>
                        <div className="mt-2 p-2 bg-gray-700 rounded border border-gray-600">
                          <div className="text-xs text-yellow-300 mb-0.5">RESEARCH FOCUS:</div>
                          <p className="text-gray-300 text-xs">{edu.dissertation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom indicators */}
                  <div className="flex justify-between mt-3 pt-2 border-t border-gray-700">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse mr-1.5"></div>
                      <span className="text-xs font-mono text-gray-400">VERIFIED</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs font-mono text-yellow-300">ID: {Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Connecting Arm Left */}
                <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 w-1/12 h-3 bg-yellow-500"></div>
                
                {/* Connecting Arm Right */}
                <div className="absolute right-1/3 top-1/2 transform -translate-y-1/2 w-1/12 h-3 bg-yellow-500"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* System Status Footer */}
      <div className="mt-10 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gray-800 border-t-2 border-yellow-400 p-3 rounded-b-lg flex justify-between items-center"
        >
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-xs font-mono text-gray-300">ASSEMBLY LINE OPERATIONAL</span>
          </div>
          <div className="text-xs font-mono text-yellow-300">EDUCATIONAL UNITS PROCESSED: {educationData.length}</div>
          <div className="flex items-center">
            <span className="text-xs font-mono text-gray-300 mr-2">SYSTEM STATUS: OPTIMAL</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}