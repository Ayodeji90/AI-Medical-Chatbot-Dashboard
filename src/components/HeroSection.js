import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex w-screen h-screen bg-gradient-to-tr from-white via-blue-100 to-blue-200 dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {/* Navigation Bar */}
          <nav className="flex justify-between items-center p-6">
            <div className="text-xl font-bold text-blue-900 dark:text-white"></div>
            <div className="flex gap-4">
              <Link to="/signup">
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:scale-105 transition-transform">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 dark:text-white font-medium hover:bg-blue-100 dark:hover:bg-gray-700 transition-transform hover:scale-105">
                  Log in
                </button>
              </Link>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="flex flex-1 flex-col md:flex-row justify-between items-center px-6 md:px-12 relative">
            {/* Left Section */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 dark:text-white leading-tight mb-6">
                Empowering Health <br />
                With AI Chatbots
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Our AI-powered healthcare chatbot enhances patient support by
                providing accurate, real-time medical guidance and automating
                routine healthcare tasks.
              </p>
              <Link to="/ChatPage">
                <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-800 transition-colors">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              <img
                src="../assets/middle.png"
                alt="Hero"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Dark Mode Toggle Button (Bottom-Right Corner) */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;