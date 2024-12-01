import React from 'react';
import './HeroSection.css'; // Ensure you have the CSS file in the same directory

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Navigation Bar */}
      <nav className="navigation">
        <img src="../assets/logo1.png" alt="Logo" className="logo" />
        <div className="sign">
          <a href="/signup">
            <button className="button sign-up">Sign Up</button>
          </a>
          <a href="/login">
            <button className="button sign-in">Sign In</button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="header-content">
          <h1 className="header-title">Empowering Health With AI Chatbots</h1>
          <svg
            className="line"
            xmlns="http://www.w3.org/2000/svg"
            width="533"
            height="10"
            viewBox="0 0 533 10"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2525 1.68631C23.5492 2.2401 53.2374 2.26779 133.83 2.32317C259.678 2.40624 359.557 3.01541 387.316 3.90147C389.521 3.98454 213.113 4.59371 194.997 4.15068C166.756 3.43075 31.8839 4.03992 4.74425 4.87061C-2.97055 5.09213 -0.077469 5.86744 4.95093 6.03358C12.8035 6.31047 33.8816 6.28278 91.674 6.2274C132.314 6.19971 455.648 6.83657 490.984 7.97185C510.822 8.60871 522.877 9.19019 528.387 9.05174C533.002 8.94098 533.071 8.60871 529.076 7.69495C526.39 7.08578 529.42 6.72581 531.349 6.55968C534.311 6.28278 533.071 5.34133 529.352 4.59371C524.323 3.5692 515.644 3.59689 519.777 4.6214C520.672 4.84292 520.879 5.39671 517.71 5.28595C508.48 4.95368 443.249 2.68313 425.546 2.29548C236.533 -1.91334 52.0663 1.1602 13.0101 0.135686C-0.835204 -0.251968 5.50205 1.35403 12.2525 1.68631Z"
              fill="#25B4F8"
            />
          </svg>
          <p className="header-subtitle">
            Our AI-powered healthcare chatbot enhances patient support by providing accurate, real-time medical guidance and automating routine healthcare tasks.
          </p>
          <a href="/Chatbot">
            <button className="button get-started">Get Started</button>
          </a>
        </div>

        {/* Right Content Section */}
        <div className="right-content">
          <img src="../assets/middle.png" alt="Hero" className="hero-img" />
          <div className="services">
            <div className="services-content">
              <img src="../assets/MEDICAL ASSISTANCE ICON.png" alt="Medical Assistance" />
              <p>Medical Assistance</p>
            </div>
            <div className="services-content">
              <img src="../assets/SYMPTOM CHECKER ICON.png" alt="Symptom Checker" />
              <p>Symptom Checker</p>
            </div>
            <div className="services-content">
              <img src="../assets/HEALTH ANALYTIC ICON.png" alt="Health Analytics" />
              <p>Health Analytics</p>
            </div>
          </div>
        </div>
      </div>
      <p className="footer-content">
        Your privacy is our priority. All interactions are secure and confidential.
      </p>
    </div>
  );
};

export default Dashboard;
