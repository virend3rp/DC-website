"use client";
import { motion } from "framer-motion";

const researchInterests = [
  {
    title: "Soft Actuators",
    description:
      "The conventional actuators used in exosuit make it more challenging for researchers and engineers to design compact, lightweight, and wearable systems that would be truly portable and non-restrictive for the wearer. My work focuses on developing lightweight, compliant, fully portable, comfortable, energy-efficient, and powerful soft twisted string actuator systems (TSAs) that can eliminate the use of rigid actuation systems and structures.",
  },
  {
    title: "Exoskeleton and Exosuit",
    description:
      "The wearable exoskeleton and exosuit are paving the way toward robotic abilities that are vital for a wide range of applications, including assistance, rehabilitation, telemanipulation, human-machine interaction, and more. An essential challenge is to make an exosuit using active textile-like conventional clothes. I am designing and developing a comfortable, fully portable, compact exosuit to assist the daily life activities of human beings.",
  },
  {
    title: "Metamorphic Drone Arm with a Gripper",
    description:
      "The reconfigurable and deployable drone arm with gripper technology has enormous potential for solving real-world challenges. It can do activities in hazardous environments where humans cannot enter and can be controlled remotely. It is a vital solution for many applications including parcel delivery, inspection, gripping, aerial manipulation, and more.",
  },
];

export default function ResearchInterests() {
  return (
    <section className="min-h-screen py-16 px-8 bg-[#0a0a0a] w-full flex flex-col items-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold text-center mb-12 relative"
      >
        Research Interests
        <span className="block h-1 w-24 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mt-2 rounded-full"></span>
      </motion.h2>

      {/* Grid Layout for Research Interests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {researchInterests.map((interest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            className="relative p-6 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl backdrop-blur-md transition transform hover:scale-105 hover:shadow-2xl hover:border-blue-400"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{interest.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{interest.description}</p>
            <div className="absolute -top-3 -left-3 bg-blue-500 w-6 h-6 rounded-full"></div>
            <div className="absolute -bottom-3 -right-3 bg-green-500 w-6 h-6 rounded-full"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
