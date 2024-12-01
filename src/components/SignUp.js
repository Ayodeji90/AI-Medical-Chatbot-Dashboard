import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", { name, email, password });
      if (response.status === 201) {
        window.location.href = "/login";
      }
    } catch (err) {
      setError("Sign-up failed. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="left-section">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <button className="sign-in-btn" onClick={() => (window.location.href = "/login")}>
            Sign In
          </button>
        </div>

        <div className="right-section">
          <h2>Create An Account</h2>
          <p>Create your account to get started!</p>
          <button className="google-btn"
            onClick={() => (window.location.href = "/login")}>
            <img className="google-icon" src="/assets/google-icon.svg" alt="Google Icon" />
            Sign up with Google
          </button>
          <div className="divider">
            <span>Or</span>
          </div>
          <form onSubmit={handleSignup} className="signup-form">
            {error && <p className="error-message">{error}</p>}
            <input
              type="text"
              placeholder="Type your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Agree with Terms and Privacy</label>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
