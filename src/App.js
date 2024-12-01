import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection"; // Update with correct path
import SignUp from "./components/SignUp"; // Update with correct path
import Login from "./components/Login"; // Update with correct path
import ChatPage from "./pages/ChatPage"; // Update with correct path

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
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
