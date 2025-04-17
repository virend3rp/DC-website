"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa"; // Add the chevron icon for expand-collapse

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
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [beltPosition, setBeltPosition] = useState(0);

  // Animation for the conveyor belt
  useEffect(() => {
    const animateBelt = () => {
      setBeltPosition((prev) => (prev + 1) % 35); // Loop every 35 pixels
    };

    const intervalId = setInterval(animateBelt, 100); // Update every 100ms

    return () => clearInterval(intervalId);
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center text-white">
      <h2 className="text-5xl font-bold relative inline-block mb-16 text-center">
        Education
        <span className="block h-1 w-24 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="relative w-full max-w-5xl flex flex-col items-center">
        <div className="absolute left-1/2 top-0 w-1 bg-gray-600 transform -translate-x-1/2 h-full rounded-full"></div>

        <div className="space-y-12 w-full">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
              className={`relative shadow-lg rounded-xl p-6 w-full md:w-1/2 transition duration-300
                ${expandedId === index ? "shadow-2xl" : "hover:shadow-2xl"}
                ${expandedId === index 
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-300" 
                  : "bg-white hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-200"
                }
                text-black
                ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
            >
              <div className="flex justify-between items-start cursor-pointer" onClick={() => toggleExpand(index)}>
                {/* College Logo */}
                <div className="w-12 h-12 mr-3 flex-shrink-0">
                  <Image src={edu.logo} alt={edu.institution} width={48} height={48} className="rounded-full" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                  <p className="text-lg text-gray-600 font-medium mt-1">{edu.duration}</p>
                  <p className="mt-3 font-medium">{edu.institution}</p>
                </div>
                <motion.div animate={{ rotate: expandedId === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-4 mt-1">
                  <FaChevronDown className={`text-lg ${expandedId === index ? "text-black" : "text-gray-500"}`} />
                </motion.div>
              </div>

              <motion.div initial={false} animate={{ height: expandedId === index ? "auto" : 0, opacity: expandedId === index ? 1 : 0, marginTop: expandedId === index ? 16 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold mb-2">Research Focus:</h4>
                  <p className="text-black text-xs">{edu.dissertation}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
