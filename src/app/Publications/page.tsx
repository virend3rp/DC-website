"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      "Muthusamy, Praveen Kumar, et al. \"Aerial manipulation of long objects using adaptive neuro-fuzzy controller under battery variability.\" Scientific Reports 15.1 (2025): 1-20.",
      "Suthar, Bhivraj, Mohammad Zubair, and Seul Jung. \"Self-folding gravity compensation mechanism for a supplementary folding robot arm: Design, analysis and implementation.\" Robotics and Autonomous Systems 190 (2025): 104984.",
      
      "Hasanen, Basma, et al. \"Design of twisted string actuated flexure joint for supernumerary robotic arm for bi-manual tasks.\" IEEE Sensors Journal (2024).",
      
      "Suthar, Bhivraj, et al. \"Design of robotic finger using twisted string actuator with modular passive return rotational joints to achieve high grasping force: Application to wearable sixth finger.\" Mechatronics 99 (2024): 103157.",
      
      "Dragusanu, M., et al. \"Mglove-ts: A modular soft glove based on twisted string actuators and flexible structures.\" Mechatronics 98 (2024): 103141.",
      
      "Suthar, Bhivraj. \"Design of Twisted String Actuated Flexure Joint for Supernumerary Robotic Arm for Bi-manual Tasks.\" Authorea Preprints (2023).",
      
      "Suthar, Bhivraj, and Jee Hwan Ryu. \"Twisted string actuation through a conduit: Undesirable behaviors and pre-twist effects.\" Mechatronics 96 (2023): 103084.",
      
      "Muthusamy, Praveen Kumar, et al. \"Self-organizing BFBEL control system for a UAV under wind disturbance.\" IEEE Transactions on Industrial Electronics 71.5 (2023): 5021-5033.",
      
      "Suthar, Bhivraj, et al. \"Design of Adaptive Sensor Coupling-Based Upper Limb 7-DOF Exoskeleton for Smooth Human Motion Tracking: ASC-EXO.\" IEEE Sensors Journal 23.18 (2023): 20607-20618.",
      
      "Faris, Omar, et al. \"Design and experimental evaluation of a sensorized parallel gripper with optical mirroring mechanism.\" Mechatronics 90 (2023): 102955.",
      
      "Maksudovna, Vafaeva Khristina, et al. \"Methods of Ensuring Information Security in BIM.\" E3S Web of Conferences. Vol. 430. EDP Sciences, 2023.",
      
      "Patel, Vivek, et al. \"Breast cancer diagnosis from histopathology images using deep learning methods: a survey.\" E3S Web of Conferences. Vol. 430. EDP Sciences, 2023.",
      
      
      "Suthar, Bhivraj, et al. \"Robotic Drone Arm for civil structures inspection: Challenges and Future Directions.\" E3S Web of Conferences. Vol. 430. EDP Sciences, 2023.",
      
      "Ghosh, Abhijeet, et al. \"Neurocognitive Mechanisms of Anti-Lingual & Accent Bias Stereotyping in Virtual Reality and the Sustainable Development of Linguistic Response.\" E3S Web of Conferences. Vol. 430. EDP Sciences, 2023.",
      
      "Mahadeva, Rajesh, et al. \"Artificial Intelligence in Water Desalination: A Novel Approach for Global Sustainability.\" E3S Web of Conferences. Vol. 430. EDP Sciences, 2023.",
      
      "Bhivraj Suthar, Mohd.Zubair, Sachin Kansal and Sudipto Mukherjee, ”Design of Adaptive Sensor Coupling-based Upper Limb 7-DOF Exoskeleton for Smooth Human Motion Tracking: ASC-EXO”, IEEE Sensors Journal (Q1), IF-4.32, April 2023",
      
      "Omar Faris, Huda Alyammahi, Bhivraj Suthar, Rajkumar Muthusamy, Umer Hameed Shah, Irfan Hussain, Dongming Ganb, Lakmal Seneviratne and Yahya Zweiri, ”Design and Experimental Evaluation of a Sensorized Parallel Gripper based on the Periscope Principle”, Journal of Mechatronics, Elsevier (Q1), IF-3.65, April 2023",
      
      "Mohammad Zubair, Bhivraj Suthar and Seul Jung, ”Design and Analysis of Flexure Mechanisms for Human Hand Tremor Compensation,” IEEE Access (Q1), IF- 3.367, 2022.",
      
      
      
      
      
      "Sachin Kansal, Mohd.Zubair, Bhivraj Suthar, and Sudipto Mukherjee, ”Tele-operation of an Industrial Robot by an Arm Exoskeleton for Peg-in-Hole Operation Using Immersive Environments,” Robotica (Q1), IF- 1.50, 2022.",

      "Kumar, Sujit, et al. \"Useful techniques and applications of computational intelligence.\" Computational Intelligence in Software Modeling 13 (2022): 19.",
      
      "Kansal, Sachin, et al. \"Tele-operation of an industrial robot by an arm exoskeleton for peg-in-hole operation using immersive environments.\" Robotica 40.2 (2022): 234-249.",
      
      "Zubair, Mohammad, Bhivraj Suthar, and Seul Jung. \"Design and analysis of flexure mechanisms for human hand tremor compensation.\" IEEE Access 10 (2022): 36006-36017.",
      
      "Suthar, Bhivraj, and Vikramaditya Dave. \"A Bio-inspired Cat-Leap Parkour Rolling Mechanism (CPRM) Design Inception to Realization, and Applications.\" Authorea Preprints (2022).",

      "Bhivraj Suthar and Seul Jung, ”Design and Feasibility Analysis of a Foldable Robot Arm for Drones Using a Twisted-String Actuator: FRAD,” IEEE Robotics and Automation Letters (Q1), IF- 3.6, 2021.",

      "Suthar, Bhivraj, and Seul Jung. \"Design and bending analysis of a metamorphic parallel twisted-scissor mechanism.\" Journal of Mechanisms and Robotics 13.4 (2021): 040901.",
      
      "Suthar, Bhivraj, and Seul Jung. \"Design and feasibility analysis of a foldable robot arm for drones using a twisted string actuator: Frad-tsa.\" IEEE Robotics and Automation Letters 6.3 (2021): 5769-5775.",
      
      "Shrivastava, Rahul, et al. \"A novel grid and place neuron’s computational modeling to learn spatial semantics of an environment.\" Applied Sciences 10.15 (2020): 5147.",

      "Khan, Muhammad Arshad, et al. \"Single-motor-based bidirectional twisted string actuation with variable radius pulleys.\" IEEE Robotics and Automation Letters 4.4 (2019): 3735-3741.",

      
      "Patel, Bhagya Niranjanbhai, and Rinni Shah. \"Smart village a case study of Kolavada village.\" International Research Journal of Engineering and Technology 4.12 (2017): 907-911.",


      "Suthar, Bhivraj, and Nidhi Sindhu. \"Design of energy efficient four finger robotic hand.\" International Journal of Robotics and Automation (IJRA) 5.1 (2016): 1-5.",

      "Suthar, Bhivraj, Tanmay Shrivastava, and Lamyanba Heisnam. \"Validation of end effector matrix for robotic kit owi-535 using Matlab and Robo analyzer.\" International Journal of Robotics and Automation (IJRA) 5.1 (2016): 54-60.",

      "Gupta, Rajkumar, et al. \"Women empowerment by technology supported manufacturing of beads from Holy Basil.\" Current Science (2015): 1660-1664.",

      "Zubair, Md, et al. \"Haptics exoskeleton for tele-operation of industrial robot.\" Proceedings of the 3rd joint international conference on multibody dynamics and the 7th Asian conference on multibody dynamics. 2014.",
      
    ],
  },
  {
    title: "Conference Publications",
    items: [
      "Dragusanu, Mihai, et al. \"Development of a Soft Actuated Glove Based on Twisted String Actuators for Hand Rehabilitation.\" 2024 10th IEEE RAS/EMBS International Conference for Biomedical Robotics and Biomechatronics (BioRob). IEEE, 2024.",
      "Lochan, Kshetrimayum, et al. \"Advancements in precision spraying of agricultural robots: A comprehensive Review.\" IEEE Access (2024).",
      "Suthar, Bhivraj, Yusra Abdulrahman, and Yahya Zweiri. \"Robotic Fingers: Advancements, Challenges, and Future Directions-A Comprehensive Review.\" IEEE Access (2024).",
      "Suthar, B., et al. \"Robotic Drone Arm for civil structures inspection: Challenges and Future Directions: E3S Web of Conferences.\" (2023).",
      "Patel, Vivek, et al. \"Breast Cancer Diagnosis from Histopathology Images Using Deep Learning Methods: A Survey: E3S Web of Conferences.\" (2023).",
      "Suthar, Bhivraj, and Seul Jung. \"Conceptual Design of an Extendable Rope-Inspired Module Space Orbit Arm for Maneuvering: ERM-SOA.\" 46th Aerospace Mechanisms Symposium. 2022.",
      "Suthar, Bhivraj, and Vikramaditya Dave. \"A Bio-inspired Cat-Leap Parkour Rolling Mechanism (CPRM) Design Inception to Realization, and Applications.\" Authorea Preprints (2022).",
      "Bhivraj Suthar, Mohammad Zubair, Sachin Kansal and Sudipto Mukherjee, ”Development of a Compliant Joint Based Upper Limb Exoskeleton for Stable Tele-manipulation: CJ EXO,” IEEE RAS/EMBS International Conference on Biomedical Robotics and Biomechatronics (BioRob 2022), August 21-24, 2022, Seoul National University, Seoul, Republic of Korea.",
      "Bhivraj Suthar and Seul Jung, ”Conceptual Design of an Extendable Rope-inspired Module Space Orbit Arm for Maneuvering: ERM- SOA,” 46th NASA Aerospace Mechanisms Symposium-2022, May 11-13, 2022, NASA Johnson Space Center and Lockheed Martin Space, USA.",
      "Bhivraj Suthar, YeJin Chio, and Seul Jung, ”Design and Experimental Evaluation of Foldable Robot Arms for holding and Installation Work: FRAHI”, 30th IEEE International Conference on Robot and Human Interactive Communication (ROMAN-2021), August 8 - 12, 2021, Canada.",
      "Bhivraj Suthar and Seul Jung, ”Design of a Novel Twisted-Scissor Structure for Foldable Robot Arm”, 18th International Conference on Ubiquitous Robots (UR-2021), South Korea.",
      "Suthar, Bhivraj, and Seul Jung. \"Design of a drone-hawk gripper for nest removal from electric tower.\" 2021 21st International Conference on Control, Automation and Systems (ICCAS). IEEE, 2021.",
      "Suthar, Bhivraj, and Seul Jung. \"Design and Development of a Co-axial Passive Flexion Mechanism-based Gripper for Irregular Objects.\" 2021 21st International Conference on Control, Automation and Systems (ICCAS). IEEE, 2021.",
      "Zubair, Mohammad, Bhivraj Suthar, and Seul Jung. \"An Experimental Setup to Study the Performance of Flexure Mechanism.\" 2021 21st International Conference on Control, Automation and Systems (ICCAS). IEEE, 2021.",
      
      "Suthar, Bhivraj, and Seul Jung. \"Conceptual design and feasibility test of foldable robotic arms for collaborative work: Frac.\" 2021 IEEE 17th International conference on automation science and engineering (CASE). IEEE, 2021.",
      
      "Suthar, Bhivraj, Yejin Choi, and Seul Jung. \"Design and experimental evaluation of foldable robot arms for a holding and installation work: frahi.\" 2021 30th IEEE International Conference on Robot & Human Interactive Communication (RO-MAN). IEEE, 2021.",
      
      "Suthar, Bhivraj, and Seul Jung. \"Design of a Novel Twisted-Scissor Structure for a foldable robot arm.\" 2021 18th International Conference on Ubiquitous Robots (UR). IEEE, 2021.",
      
      "Zubair, Mohammad, et al. \"Vibration suppression mechanism for foldable robot arm for drones.\" 2021 18th International conference on ubiquitous robots (UR). IEEE, 2021.",
      
      

      "Shvetsova, Olga A., and Bhivraj Suthar. \"Business Trends and Opportunities of South Korea and India Cooperation.\" 2018 IEEE International Conference\" Quality Management, Transport and Information Security, Information Technologies\"(IT&QM&IS). IEEE, 2018.",
      
      "Suthar, Bhivraj, et al. \"Preliminary study of twisted string actuation through a conduit toward soft and wearable actuation.\" 2018 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2018.",
      
      "Singh, Harsimran, et al. \"Ferro-fluid based portable fingertip haptic display and its preliminary experimental evaluation.\" 2018 IEEE Haptics Symposium (HAPTICS). IEEE, 2018.",
      
      "Usman, Muhammad, et al. \"A study on life cycle of twisted string actuators: Preliminary results.\" 2017 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2017.",
      
      "Sheikh, Sabha, Bhivraj Suthar, and Moin Uddin. \"Comparative study of noise and digital filters for image processing.\" 2017 International Conference on Innovations in Control, Communication and Information Systems (ICICCI). IEEE, 2017.",
      
      "Usman, Muhammad, et al. \"Passive returning mechanism for twisted string actuators.\" 2017 IEEE International Conference on Robotics and Automation (ICRA). IEEE, 2017.",
      
      "Zubair, Mohd, et al. \"Kinematic mapping of Exoskeleton with virtual KUKA robot.\" 2016 International Conference on Robotics and Automation for Humanitarian Applications (RAHA). IEEE, 2016.",
      
      "Kansal, Sachin, et al. \"Evolution of the exoskeleton-IIT Delhi.\" Proc. 3rd Joint Int. Conf. Multibody Dyn.. 2016.",
      
      "Rawal, Sakshi, et al. \"Jitter removal in KUKA KR-5 using modified Kalman filter while tele-operating with exoskeleton.\" The Proceedings of the Asian Conference on Multibody Dynamics 2016.8. The Japan Society of Mechanical Engineers, 2016.",
      
    ],
  },
];

// Publications component
const Publications: React.FC = () => {
  return (
    <section className="bg-[#1e2a47] py-10 min-h-screen relative">
      <motion.div
        className="container mx-auto p-9 space-y-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-center mb-8 shadow-md"
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
                alt="Royal Stamp"
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
              <ul className="space-y-4 text-sm text-black">
                {publication.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  >
                    <span className="font-semibold text-black">{itemIndex + 1}.</span>
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
