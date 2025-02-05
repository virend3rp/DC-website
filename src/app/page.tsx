import FloatingImage from "../components/FloatingImage";

export default function Home() {
  return (
    <section className="bg-bannerImg bg-no-repeat bg-cover bg-bottom w-full h-screen flex items-center">
      {/* Content and Image in the same div */}
      <div className="w-full flex items-center px-6">
        
        {/* Floating Image on the left */}
        <div className="w-1/3 flex justify-center mr-8">
          <FloatingImage />
        </div>

        {/* Content on the right with background color */}
        <div className="w-1/2 text-center md:text-left bg-white bg-opacity-75 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-gray-900">Dr. Bhivraj Suthar</h1>
          <p className="text-lg text-gray-800 mt-4">
            Assistant Professor at IIT Jodhpur, specializing in Robotics & AI.
          </p>
          <p className="mt-4 text-gray-700">
            Dr. Suthar is working as an Assistant Professor at the School of Artificial Intelligence and Data Science at IIT Jodhpur, India. He is also associated with Robotics & Mobility Systems, IIT Jodhpur & AIIMS MedTech Centre. Before joining IIT Jodhpur, he was a Postdoctoral research fellow at the Robotic Centre at Khalifa University (UAE), Korea Advanced Institute of Science and Technology (Korea), Chungnam National University (Korea) and IIT Delhi (India). His research interests span a wide spectrum, including Bio-inspired Mechanisms, Actuators, Grippers, Prosthetic Limbs, Supernumerary Robotic Limbs, Exoskeletons, Haptic Devices, Drone Metamorphic Manipulators and Artificial Intelligence. Dr. Suthar embarked on a transformative life journey encapsulated in the phrase "Robot artist to Roboticist." His passion for robotics ignited during his childhood, where he devoted his energies to developing Robotic systems. Over the years, he has carved an impressive track record, successfully developing over 15 innovative robots in-house and holding 7 patents. He earned his Ph.D. in Mechanical Engineering (Robotics) from Korea University of Technology and Education in 2015, a Master’s degree in Energy Engineering (Robotics) from IIT Delhi, and a B.E. in Electrical Engineering (Robotics) from CTAE, Rajasthan, India. 
          </p>
        </div>
      </div>
    </section>
  );
}