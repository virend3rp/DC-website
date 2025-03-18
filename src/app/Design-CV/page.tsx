"use client";

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    image: '/rope-inspired-arm.png', // Replace with the actual image path
    title: 'Extendable Rope-Inspired Module Space Orbit Arm for Manuevering:ERM-SOA',
    description:
      'The space orbit arm comprises rigid links with long length and a fixed working volume that limits its maximum reachable distance. Due to a rigid and long arm structure, the transfer of the contact impact momentum to a floating Space Orbit Arm (SOA) system causes the collision between the arm end-effector and the target object. To mitigate the limitation of the space orbit manipulator, we proposed the concept design of a deployable and extendable rope-inspired modular space orbit arm (ERM-SOA). The arm has a radius and the humerus link with 7 DOF like a human arm. The arm links are designed as a rope-inspired structure incorporated with a multi-strands parallel twisted-scissor mechanism to make it extendable. The space manipulator reach can be adjustable according to the application requirement. For example, the proposed arm can grab a payload and drop it into spacecraft.',
  },
  {
    image: '/foldable-arms.png', // Replace with the actual image path
    title: 'Foldable Robotic Arms for Collaborative Work (FRAC)',
    description:
      'The supplementary arm is metamorphic called Foldable Robotic Arms for Collaboration (FRAC) to extend the operational degrees of freedom. FRAC provides additional two arms for a worker to augment the tasks with the environment where the additional arms are necessary.',
  },
  {
    image: '/Upper-Limb-Exosuit.png', // Replace with the actual image path
    title: 'Upper Limb Exosuit (ULE)',
    description:
      'It is a device for arm assistance based on multiple underactuated soft coil actuators & tendons wire mechanisms. The concept behind is assisting human arm for daily life activities. It also can be used for rehabilitation or exercising the arm functions and restoring the control of grasping like a normal therapeutic motion.',
  },
];

const DesignCV: React.FC = () => {
  return (
    <section className="bg-blue-900 min-h-screen py-16">
      <motion.div
        className="container mx-auto px-6 py-12 space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Portfolio Title */}
          <motion.h1
            className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          >
            DESIGN PORTFOLIO
        </motion.h1>

        {/* Projects Section */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                {/* Overlay Effect on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 rounded-lg"></div>
              </div>
              <h2 className="text-xl font-serif font-semibold text-white mb-3">{project.title}</h2>
              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
    </section>
  );
};

export default DesignCV;
