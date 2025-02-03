"use client";
import { NextPage } from "next";
import { useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import HeroSec from "../components/ui/HeroSec";

const ContactPage: NextPage = () => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const handleScroll = () => {
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or service)
    setStatus("Message sent! We'll get back to you shortly.");
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <HeroSec
        imageSrc="/contact bg.webp"
        heading="Reach Out, We're Listening"
        tagline="We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hello, feel free to reach out."
        buttonText="Send Message"
        onButtonClick={handleScroll}
      />

      {/* Contact Form */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10" ref={buttonRef}>
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <div className="flex items-center space-x-4 mb-6">
              <FaEnvelope className="text-teal-600 text-xl" />
              <div>
                <h4 className="font-medium text-gray-700">Email</h4>
                <p className="text-gray-500">info@posthive.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <FaPhoneAlt className="text-teal-600 text-xl" />
              <div>
                <h4 className="font-medium text-gray-700">Phone</h4>
                <p className="text-gray-500">+1 (234) 567-890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaLocationArrow className="text-teal-600 text-xl" />
              <div>
                <h4 className="font-medium text-gray-700">Address</h4>
                <p className="text-gray-500">
                  123 PostHive Street, City, Country
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-teal-500 focus:outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-teal-500 focus:outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-teal-500 focus:outline-none"
                  placeholder="Your Message"
                  rows={6}
                  required
                />
              </div>

              {status && <div className="text-green-600">{status}</div>}

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 PostHive. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
