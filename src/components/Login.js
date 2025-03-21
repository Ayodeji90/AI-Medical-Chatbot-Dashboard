import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      if (response.status === 200) {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="right-section">
          <h2>Welcome Back!</h2>
          <button
            className="google-btn"
            onClick={() => (window.location.href = "/auth/google")}
          >
            <img className="google-icon" src="/assets/google-icon.svg" alt="Google Icon" />
            Log in with Google
          </button>
          <div className="divider">
            <span>Or</span>
          </div>
          <form onSubmit={handleLogin} className="login-form">
            {error && <p className="error-message">{error}</p>}
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
            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <a href="/forgot-password" className="forgot-password-link">
                Forget Password?
              </a>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>

        <div className="left-section">
          <h2>Hello, Friend!</h2>
          <p>Enter your personal details and start your journey with us</p>
          <button className="signup-btn" onClick={() => (window.location.href = "/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
