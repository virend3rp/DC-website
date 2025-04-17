"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define awards data
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

  const toggleAward = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white p-6 relative"
      style={{
        backgroundColor: "#1f2937", // Dark background similar to experience page
      }}
    >
      {/* Main Heading */}
      <div className="relative z-10 mb-8 text-center">
        <h1 className="text-5xl font-extrabold text-gray-100">
          AWARDS
        </h1>
        {/* Big Yellow Line covering the title */}
        <div className="w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mt-2"></div>
      </div>

      {/* Award Cards Container */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {awardsData.map((award, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-md cursor-pointer transition-all duration-300"
            onClick={() => toggleAward(i)}
          >
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
                  <p className="text-gray-300 leading-relaxed">
                    {award.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
