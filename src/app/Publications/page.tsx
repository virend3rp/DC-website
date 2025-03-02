"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define the publications data
const publications = [
  {
    title: "Patents",
    items: [
      "Bhivraj Suthar \“Reconfigurable water jet fire fighting drone,\” Indian Patent, Application number: 202311003108",
      "Bhivraj Suthar, Mohammad Zubair and Sachin Kansal, \“5-DOF flexure mechanism base to suppress noise in a rotary sensor for a robotic system\”, Application number: 362283-001",
      "Bhivraj Suthar, Balkishan Suthar and Ravi Ranjan \“Self-Adjustable Chasses of Quad Rotor Unmanned Arial Vehicle,\” Application Number: 408/DEL/2015",
      "Bhivraj Suthar, Nidhi Sindhu, \“Design of four finger hand\”, Application no- 409/DEL/2015",
      "Ravi Ranjan, Bhivraj Suthar, Venkat Chintala, \“A system for NOx (Nitrogen Oxides) emission after treatment in automobiles,\” Application no- 332/DEL/2015",
      "Ravi Ranjan, Bhivraj Suthar, Venkat Chintala, \“Multi-hole auto swirl type fuel Injector,\” Application number- 333/DEL/2015",
    ],
  },
  {
    title: "Journals",
    items: [
      "Bhivraj Suthar, Mohd.Zubair, Sachin Kansal and Sudipto Mukherjee, ”Design of Adaptive Sensor Coupling-based Upper Limb 7-DOF Exoskeleton for Smooth Human Motion Tracking: ASC-EXO”, IEEE Sensors Journal (Q1), IF-4.32, April 2023",
      "Omar Faris, Huda Alyammahi, Bhivraj Suthar, Rajkumar Muthusamy, Umer Hameed Shah, Irfan Hussain, Dongming Ganb, Lakmal Seneviratne and Yahya Zweiri, ”Design and Experimental Evaluation of a Sensorized Parallel Gripper based on the Periscope Principle”, Journal of Mechatronics, Elsevier (Q1), IF-3.65, April 2023",
      "Mohammad Zubair, Bhivraj Suthar and Seul Jung, ”Design and Analysis of Flexure Mechanisms for Human Hand Tremor Compensation,” IEEE Access (Q1), IF- 3.367, 2022.",
      "Sachin Kansal, Mohd.Zubair, Bhivraj Suthar, and Sudipto Mukherjee, ”Tele-operation of an Industrial Robot by an Arm Exoskeleton for Peg-in-Hole Operation Using Immersive Environments,” Robotica (Q1), IF- 1.50, 2022.",
      "Bhivraj Suthar and Seul Jung, ”Design and Feasibility Analysis of a Foldable Robot Arm for Drones Using a Twisted-String Actuator: FRAD,” IEEE Robotics and Automation Letters (Q1), IF- 3.6, 2021.",
    ],
  },
  {
    title: "Conference Publications",
    items: [
      "Bhivraj Suthar, Mohammad Zubair, Sachin Kansal and Sudipto Mukherjee, ”Development of a Compliant Joint Based Upper Limb Exoskeleton for Stable Tele-manipulation: CJ EXO,” IEEE RAS/EMBS International Conference on Biomedical Robotics and Biomechatronics (BioRob 2022), August 21-24, 2022, Seoul National University, Seoul, Republic of Korea.",
      "Bhivraj Suthar and Seul Jung, ”Conceptual Design of an Extendable Rope-inspired Module Space Orbit Arm for Maneuvering: ERM- SOA,” 46th NASA Aerospace Mechanisms Symposium-2022, May 11-13, 2022, NASA Johnson Space Center and Lockheed Martin Space, USA.",
      "Bhivraj Suthar, YeJin Chio, and Seul Jung, ”Design and Experimental Evaluation of Foldable Robot Arms for holding and Installation Work: FRAHI”, 30th IEEE International Conference on Robot and Human Interactive Communication (ROMAN-2021), August 8 - 12, 2021, Canada.",
      "Bhivraj Suthar and Seul Jung, ”Design of a Novel Twisted-Scissor Structure for Foldable Robot Arm”, 18th International Conference on Ubiquitous Robots (UR-2021), South Korea.",
    ],
  },
];

// Publications component
const Publications: React.FC = () => {
  return (
    <section className="bg-black py-10 min-h-screen relative">
      <motion.div
        className="container mx-auto p-9 space-y-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-blue-600 text-center mb-8 shadow-md"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          Publications
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              className="relative bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundImage: "url('/manual-bg.jpg')" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src="/royal-stamp.png" 
                alt="Nail" 
                width={40} 
                height={40} 
                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3"
              />
              <motion.h2
                className="text-2xl font-semibold text-yellow-300 mb-4 text-center shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {publication.title}
              </motion.h2>
              <ul className="space-y-4 text-sm text-gray-900">
                {publication.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  >
                    <span className="font-semibold text-gray-800">{itemIndex + 1}.</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Publications;
