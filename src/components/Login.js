import React, { useState } from "react";
import axios from "axios";
import "./styles/Login.css";

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
      setError("Login failed. Check your credentials and try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Log in to continue</p>

        <form onSubmit={handleLogin} className="login-form">
          {error && <p className="error-message">{error}</p>}
          <input
            type="email"
            placeholder="Email Address"
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
          <button type="submit">Login</button>
        </form>

        <div className="login-footer">
          <p>Don’t have an account?</p>
          <a href="/signup" className="link">
            Sign Up Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
