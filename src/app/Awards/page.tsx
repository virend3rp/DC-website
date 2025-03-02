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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAward = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white p-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/motherboard.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blurry Overlay */}
      <div className="absolute inset-0 bg-green-800/50 backdrop-blur-lg"></div>

      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-xl mb-6 relative z-10">
        ✨ Awards ✨
      </h1>

      {/* Award Cards Container */}
      <div className="w-full max-w-xl grid grid-cols-1 gap-6 relative z-10">
        {awardsData.map((award, i) => (
          <motion.div
            key={i}
            className="py-8 px-6 min-h-[200px] bg-green-900 rounded-lg drop-shadow-lg text-center cursor-pointer border-4 border-yellow-500 hover:border-yellow-600 relative overflow-hidden"
            onClick={() => toggleAward(i)}
            layout
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500"></div>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-yellow-500"></div>
            <h2 className="text-2xl font-bold text-yellow-400">{award.title}</h2>
            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  className="text-gray-100 mt-4 leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {award.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
