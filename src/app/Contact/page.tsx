"use client";
import React, { useState } from "react";
// import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: 'url("/iitj.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden w-full max-w-5xl"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="First Name"
              className="w-full p-4 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-4 border rounded"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full p-4 border rounded"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="What do you have in mind?"
              className="w-full p-4 border rounded"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Address Section */}
        <div className="w-full md:w-1/2 p-8 bg-gray-100 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Reach us at
          </h2>
          <p className="text-gray-700 text-lg">Dr. Bhivraj Suthar</p>
          <p className="text-gray-700 text-lg">
            Assistant Professor, Roboticist
          </p>
          <p className="text-gray-700 text-lg">
            School of Artificial Intelligence and Data Science
          </p>
          <p className="text-gray-700 text-lg">
            COE: Brain Science and Applications
          </p>
          <p className="text-gray-700 text-lg">
            IDRP: Robotics & Mobility Systems (RMS)
          </p>
          <p className="text-gray-700 text-lg">
            Indian Institute of Technology Jodhpur (IITJ), Rajasthan, India
          </p>
          <p className="text-gray-700 text-lg mt-4">
            Phone: <strong>+91 291 280 1764</strong>
          </p>
          <p className="text-gray-700 text-lg">
            Email: <strong>bhivraj@iitj.ac.in</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
