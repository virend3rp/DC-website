"use client";
import FloatingImage from "../components/FloatingImage";
import { motion } from "framer-motion";

export default function Home() {
  return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl px-6">
          {/* Animated White Container */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y:50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center bg-white bg-opacity-75 p-8 rounded-lg shadow-lg"
          >
            {/* Floating Image on the left */}
            <div className="w-1/3 flex justify-center mr-8">
              <FloatingImage />
            </div>

            {/* Content on the right */}
            <div className="w-2/3 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900">Dr. Bhivraj Suthar</h1>
              <p className="text-lg text-gray-800 mt-4">
                Assistant Professor at IIT Jodhpur, specializing in Robotics & AI.
              </p>
              <p className="mt-4 text-gray-700">
                    Dr. Suthar is working as an Assistant Professor at the School of Artificial Intelligence and Data Science at IIT Jodhpur, India. He is also associated with Robotics & Mobility Systems, IIT Jodhpur & AIIMS MedTech Centre.  Before joining IIT Jodhpur, he was a Postdoctoral research fellow at the Robotic Centre at Khalifa University (UAE), Korea Advanced Institute of Science and Technology (Korea), Chungnam National University (Korea) and IIT Delhi (India). His research interests span a wide spectrum, including Bio-inspired Mechanisms, Actuators, Grippers, Prosthetic Limbs, Supernumerary Robotic Limbs, Exoskeletons, Haptic Devices, Drone Metamorphic Manipulators and Artificial  
                    Intelligence. Dr. Suthar embarked on a transformative life journey encapsulated in the phrase "Robot artist to Roboticist." His passion for robotics ignited during his childhood, where he devoted his energies to developing Robotic systems. Over the years, he has carved an impressive track record, successfully developing over 15 innovative robots in-house and holding 7 patents. He earned his Ph.D. in Mechanical Engineering (Robotics) from Korea University of Technology and Education in 2015, a Master’s degree in Energy Engineering (Robotics) from IIT Delhi, and a B.E. in Electrical Engineering (Robotics) from CTAE, Rajasthan, India. 
                    Acknowledging his outstanding contributions, Dr. Suthar has been honoured with prestigious awards, including the top 5 in WearRAcon Innovation Challenge Award-2022 by WearRAcon Society, USA, and top 10 in James Dyson Design Award-2021 by the Dyson Foundation, USA. The Korean Electrical Society bestowed upon him the Creativity and Innovation Award in 2021, and he received the Samsung Electro-Mechanics Award 2021 from the Korean Society of Electronics Engineering. In 2015, he was recognized with the SRISTI- Gandhian Young Technological Innovation Award by the PRESIDENT OF INDIA. 
                    
              </p>
            </div>
          </motion.div>
        </div>
      </div>
  );
}
