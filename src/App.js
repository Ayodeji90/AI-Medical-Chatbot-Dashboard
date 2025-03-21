import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ChatPage from "./components/ChatPage";
import AppointmentPage from "./components/Appointment";
import ManageAppointments from "./components/ManageAppointments";
import SymptomChecker from "./components/SymptomChecker";
import HealthDashboard from "./components/HealthDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to HeroSection */}
        <Route path="/" element={<HeroSection />} />
        {/* Route to SignUp */}
        <Route path="/signup" element={<SignUp />} />
        {/* Route to Login */}
        <Route path="/login" element={<Login />} />
        {/* Route to ChatPage */}
        <Route path="/ChatPage" element={<ChatPage />} />
        {/* Route to AppointmentPage */}
        <Route path="/Appointment" element={<AppointmentPage />} />
        {/* Route to Manage Appointments */}
        <Route path="/manage-appointments" element={<ManageAppointments />} />
        {/* Route to symptom checker */}
        <Route path="/symptom-checker" element={<SymptomChecker />} />
          {/* Route to Health Dashboard */}
          <Route path="/dashboard" element={<HealthDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
