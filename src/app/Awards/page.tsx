"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      "Awarded for 'Bird’s Nest Removal Technology from Electric Poles Using Drone’s Folding Robot Arm' by the Korean Electrical Society, South Korea, July 15, 2021. (Prize money: $500)",
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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % awardsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
      <h1 className="text-4xl font-bold mb-6">✨ Awards ✨</h1>
      <div className="relative w-full max-w-3xl h-full flex flex-col items-center justify-center">
        {awardsData.map((award, i) => {
          const isActive = i === index;

          return (
            <motion.div
              key={i}
              className={`w-80 p-6 bg-gray-900 rounded-lg shadow-lg text-center mb-6 transition-all duration-500 ease-in-out ${isActive ? "scale-110 shadow-2xl border-4 border-yellow-400" : "scale-90 opacity-70"}`}
              animate={{ opacity: isActive ? 1 : 0.7 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-yellow-400 mt-6">{award.title}</h2>
              <p className="text-gray-300 mt-4">{award.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
