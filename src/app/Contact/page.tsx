"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate sending the form data
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <motion.div
      className="container mx-auto p-6 space-y-12 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 text-center mb-12"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Contact Dr. Bhivraj Suthar
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Dr. Bhivraj Suthar Information Section */}
        <motion.div
          className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">Dr. Bhivraj Suthar</h2>
          <p className="text-xl text-gray-600">Assistant Professor, Roboticist</p>
          <p className="text-lg text-gray-600">School of Artificial Intelligence and Data Science</p>
          <p className="text-lg text-gray-600">COE: Brain Science and Applications</p>
          <p className="text-lg text-gray-600">IDRP: Robotics & Mobility Systems (RMS)</p>
          <p className="text-lg text-gray-600">Indian Institute of Technology Jodhpur (IITJ), Rajasthan, India</p>

          <p className="mt-4 text-lg text-gray-600">Phone: <strong>+91 291 280 1764</strong></p>
          <p className="text-lg text-gray-600">Email: <strong>bhivraj@iitj.ac.in</strong></p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-lg font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg mt-2 text-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-lg font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg mt-2 text-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-lg font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg mt-2 text-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="text-lg font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg mt-2 text-lg"
                rows={6}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold text-lg rounded-lg hover:bg-green-600 transition-all"
            >
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </button>

            {formStatus === "sent" && (
              <p className="mt-4 text-green-500 text-center text-lg">Your message has been sent successfully!</p>
            )}

            {formStatus === "error" && (
              <p className="mt-4 text-red-500 text-center text-lg">Something went wrong. Please try again later.</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
