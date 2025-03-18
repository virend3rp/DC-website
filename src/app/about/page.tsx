'use client';
import { motion } from 'framer-motion';
import FloatingImage from "../../components/FloatingImage";

export default function Home() {
  return (
    <section
      className="relative bg-gradient-to-b from-black to-gray-900 min-h-screen text-white"
    >
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen px-6 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between bg-opacity-80 bg-black p-8 rounded-lg shadow-2xl"
        >
          {/* Floating Image on Left */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <FloatingImage />
          </div>

          {/* Main Text Content on Right */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <motion.h1
              className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              Dr. Bhivraj Suthar
            </motion.h1>
            <motion.h2
              className="text-xl font-medium text-gray-400 mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            >
              Assistant Professor at IIT Jodhpur | Robotics Expert
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              Passionate about transforming ideas into robotics solutions. Dr. Suthar’s research spans bio-inspired mechanisms, actuators, prosthetics, exoskeletons, and AI-driven robotic systems. With a proven track record in research and innovation, he continues to shape the future of robotics.
            </motion.p>
            <motion.p
              className="text-sm text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            >
              Dr. Suthar holds a PhD in Mechanical Engineering (Robotics), a Master’s degree from IIT Delhi, and a B.E. in Electrical Engineering. With over 15 robots developed in-house and 7 patents.
            </motion.p>
          </div>
        </motion.div>
      </div>

    
    </section>
  );
}
