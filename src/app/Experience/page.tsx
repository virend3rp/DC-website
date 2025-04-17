"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const experiences = [
  {
    title: "Assistant Professor",
    duration: "October 2023 - Present",
    organization: "Indian Institute of Technology, Jodhpur, India",
    department: "School of Artificial Intelligence & Data Science, COE-Brain Science and Applications, IDRP- Robotics & Mobility Systems",
    details: [
      "Led research initiatives in robotics and AI applications",
      "Developed curriculum for advanced robotics courses",
      "Mentored graduate students on research projects",
      "Collaborated with industry partners on applied AI solutions"
    ],
    skills: ["Robotics", "AI", "Machine Learning", "Research Methodology", "Academic Leadership"]
  },
  {
    title: "Co-founder",
    duration: "December 2022 - September 2023",
    organization: "Polybot Pvt. Ltd. India",
    department: "Research and Development, Mechatronics and Robotics System Design",
    details: [
      "Established startup focused on innovative robotic solutions",
      "Secured initial funding and developed business strategy",
      "Designed prototype systems for industrial applications",
      "Built partnerships with manufacturing sector clients"
    ],
    skills: ["Entrepreneurship", "Product Development", "Mechatronics", "Business Strategy", "Team Leadership"]
  },
  {
    title: "Postdoctoral Research Fellow",
    duration: "December 2021 - October 2023",
    organization: "Center for Autonomous Robotic Systems, Khalifa University, UAE",
    department: "Project: Design and Development of a supplementary robotic finger for stroke patients",
    details: [
      "Designed and prototyped robotic finger systems for rehabilitation",
      "Conducted clinical trials with stroke patients",
      "Published research findings in peer-reviewed journals",
      "Collaborated with medical professionals to optimize device usability"
    ],
    skills: ["Medical Robotics", "Rehabilitation Engineering", "Clinical Research", "Prototyping", "Biomechanics"]
  },
  {
    title: "Postdoctoral Research Fellow",
    duration: "August 2020 - November 2021",
    organization: "Chungnam National University, South Korea",
    department: "Projects: Deployable aerial manipulator & supplementary robot arm for construction assistance",
    details: [
      "Developed aerial manipulation systems for construction applications",
      "Created control algorithms for precise manipulation tasks",
      "Built prototypes and conducted field testing",
      "Presented findings at international conferences"
    ],
    skills: ["Aerial Robotics", "Manipulation Systems", "Control Theory", "Construction Automation", "Field Testing"]
  },
  {
    title: "Junior Research Fellow",
    duration: "June 2015 - February 2016",
    organization: "Indian Institute of Technology Delhi (IIT Delhi)",
    department: "Project: 7-DOF exoskeleton for telemanipulation of KUKA KR5",
    details: [
      "Designed mechanical components for exoskeleton system",
      "Implemented telemanipulation interface for industrial robot",
      "Developed kinematics solutions for control systems",
      "Performed user studies to evaluate system efficacy"
    ],
    skills: ["Exoskeleton Design", "Telemanipulation", "Industrial Robotics", "Human-Robot Interaction", "Kinematics"]
  },
  {
    title: "Junior Research Fellow",
    duration: "July 2010 - August 2012",
    organization: "Indian Institute of Technology Delhi (IIT Delhi)",
    department: "Responsibilities: Exoskeleton design, calibration, kinematics modeling & dynamics analysis",
    details: [
      "Performed full dynamics analysis of exoskeleton systems",
      "Created calibration protocols for precision control",
      "Built mathematical models for kinematic behavior",
      "Assisted in laboratory experiments and data collection"
    ],
    skills: ["Dynamics Analysis", "Calibration Methods", "Mathematical Modeling", "Experimental Design", "Data Analysis"]
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center text-white">
      <h2 className="text-5xl font-bold relative inline-block mb-16 text-center">
        Experience
        <span className="block h-1 w-24 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="relative w-full max-w-5xl flex flex-col items-center">
        <div className="absolute left-1/2 top-0 w-1 bg-gray-600 transform -translate-x-1/2 h-full rounded-full"></div>

        <div className="space-y-12 w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className={`relative shadow-lg rounded-xl p-6 w-full md:w-1/2 transition duration-300
                ${expandedId === index ? "shadow-2xl" : "hover:shadow-2xl"}
                bg-white text-black
                ${index % 2 === 0 ? "ml-auto" : "mr-auto"}
                hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300`}
            >
              <div className="flex justify-between items-start cursor-pointer" onClick={() => toggleExpand(index)}>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-lg text-gray-600 font-medium mt-1">{exp.duration}</p>
                  <p className="mt-3 font-medium">{exp.organization}</p>
                  <p className="mt-2 text-gray-600 text-sm">{exp.department}</p>
                </div>
                <motion.div animate={{ rotate: expandedId === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-4 mt-1">
                  <FaChevronDown className={`text-lg ${expandedId === index ? "text-black" : "text-gray-500"}`} />
                </motion.div>
              </div>

              <motion.div initial={false} animate={{ height: expandedId === index ? "auto" : 0, opacity: expandedId === index ? 1 : 0, marginTop: expandedId === index ? 16 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold mb-2">Key Contributions:</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className={`${expandedId === index ? "text-black" : "text-gray-700"}`}>{detail}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-2">Skills Applied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-full text-sm ${expandedId === index ? "bg-black text-white" : "bg-yellow-100 text-yellow-800"}`}>{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
