"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <section className="py-16 px-6 bg-black flex flex-col items-center text-white">
      {/* Heading */}
      <h2 className="text-5xl font-bold relative inline-block mb-16 text-center">
        Education
        <span className="block h-1 w-24 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mt-2 rounded-full"></span>
      </h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        {/* Curved Path (Dynamically Adjust Height) */}
        <div
          className="absolute left-1/2 top-0 w-1 bg-gray-600 transform -translate-x-1/2 rounded-full"
          style={{ height: `${educationData.length * 200}px` }} // Dynamic height fix
        ></div>

        {/* Education Cards */}
        <div className="space-y-12 w-full">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className={`relative shadow-lg rounded-xl p-6 w-full md:w-1/2 transition duration-300 hover:shadow-2xl 
                bg-white text-black hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300 
                ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
            >
              {/* Institution Logo */}
              {edu.logo && (
                <div className="w-16 h-16 mb-4">
                  <Image src={edu.logo} alt={edu.institution} width={64} height={64} className="rounded-full" />
                </div>
              )}

              {/* Education Details */}
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-lg text-gray-600 font-medium mt-1">{edu.duration}</p>
              <p className="mt-3 font-medium">{edu.institution}</p>
              <p className="mt-2 text-gray-600 text-sm">{edu.dissertation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
