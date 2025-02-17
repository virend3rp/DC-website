"use client";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const experiences = [
  {
    title: "Assistant Professor",
    duration: "October 2023 - Present",
    organization: "Indian Institute of Technology, Jodhpur, India",
    department: "School of Artificial Intelligence & Data Science, COE-Brain Science and Applications, IDRP- Robotics & Mobility Systems",
  },
  {
    title: "Co-founder",
    duration: "December 2022 - September 2023",
    organization: "Polybot Pvt. Ltd. India",
    department: "Research and Development, Mechatronics and Robotics System Design",
  },
  {
    title: "Postdoctoral Research Fellow",
    duration: "December 2021 - October 2023",
    organization: "Center for Autonomous Robotic Systems, Khalifa University, UAE",
    department: "Project: Design and Development of a supplementary robotic finger for stroke patients",
  },
  {
    title: "Postdoctoral Research Fellow",
    duration: "August 2020 - November 2021",
    organization: "Chungnam National University, South Korea",
    department: "Projects: Deployable aerial manipulator & supplementary robot arm for construction assistance",
  },
  {
    title: "Junior Research Fellow",
    duration: "June 2015 - February 2016",
    organization: "Indian Institute of Technology Delhi (IIT Delhi)",
    department: "Project: 7-DOF exoskeleton for telemanipulation of KUKA KR5",
  },
  {
    title: "Junior Research Fellow",
    duration: "July 2010 - August 2012",
    organization: "Indian Institute of Technology Delhi (IIT Delhi)",
    department: "Responsibilities: Exoskeleton design, calibration, kinematics modeling & dynamics analysis",
  },
];

export default function Experience() {
  return (
    <section className="py-16 px-6 bg-black flex flex-col items-center text-white">
      {/* Heading */}
      <h2 className="text-5xl font-bold relative inline-block mb-16 text-center">
        Experience
        <span className="block h-1 w-24 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mt-2 rounded-full"></span>
      </h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        {/* Curved Path */}
        <div className="absolute left-1/2 top-0 w-1 bg-gray-600 transform -translate-x-1/2 h-full rounded-full"></div>

        {/* Experience Cards */}
        <div className="space-y-12 w-full">
          {experiences.map((exp, index) => (
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
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-lg text-gray-600 font-medium mt-1">{exp.duration}</p>
              <p className="mt-3 font-medium">{exp.organization}</p>
              <p className="mt-2 text-gray-600 text-sm">{exp.department}</p>

              {/* Connector Dot */}
              <div
                className={`absolute top-6 w-6 h-6 bg-yellow-400 rounded-full transform -translate-x-1/2 border-4 border-black shadow-lg flex items-center justify-center 
                  ${index % 2 === 0 ? "left-full ml-6" : "right-full mr-6"}`}
              >
                <FaCircle className="text-black text-xs" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
