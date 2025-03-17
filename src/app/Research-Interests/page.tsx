"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const researchInterests = [
  {
    title: "Soft Actuators",
    description:
      "The conventional actuators used in exosuits make it challenging to design compact, lightweight, and wearable systems. My work focuses on developing soft twisted string actuators (TSAs) that replace rigid actuation systems, making wearables more portable, efficient, and comfortable.",
    position: { top: "30%", left: "25%" },
  },
  {
    title: "Exoskeleton and Exosuit",
    description:
      "Exosuits assist in rehabilitation, telemanipulation, and human-machine interaction. I am designing a fully portable, compact exosuit that integrates active textiles for daily use, providing assistance without bulkiness.",
    position: { top: "55%", left: "70%" },
  },
  {
    title: "Metamorphic Drone Arm with a Gripper",
    description:
      "A reconfigurable drone arm with a gripper can operate in hazardous environments. It has applications in parcel delivery, inspection, aerial manipulation, and remote-controlled tasks.",
    position: { top: "75%", left: "40%" },
  },
];

export default function ResearchBlueprint() {
  const [selectedResearch, setSelectedResearch] = useState<
    (typeof researchInterests)[0] | null
  >(null);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-[#0a192f] text-white">
      {/* Blueprint Background */}
      <div className="relative w-[80%] max-w-4xl h-[80vh] bg-[#0a192f] border-2 border-blue-400 rounded-lg shadow-lg">
        <img
          src="/robot-blueprint.png"
          alt="Robotic Blueprint"
          className="absolute inset-0 w-full h-full opacity-30"
        />

        {/* Research Labels on the Blueprint */}
        {researchInterests.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-300 font-mono cursor-pointer text-sm sm:text-base"
            style={{ top: item.position.top, left: item.position.left }}
            whileHover={{ scale: 1.2, color: "#60a5fa" }}
            onClick={() => setSelectedResearch(item)}
          >
            <motion.div
              className="p-2 border border-blue-400 rounded-lg bg-[#112240] shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              {item.title}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Info Panel (Holographic Popup) */}
      {selectedResearch && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedResearch(null)}
        >
          <motion.div
            className="bg-[#112240] text-white p-6 rounded-lg shadow-lg border-2 border-blue-400 max-w-lg"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-blue-400">
              {selectedResearch.title}
            </h2>
            <p className="mt-2 text-gray-300">{selectedResearch.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700"
              onClick={() => setSelectedResearch(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
