import React, { useState } from "react";
import "./Login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
    // Add your login logic here
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        <select
          className="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="email"
          placeholder="Email"
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

        <div className="options-row">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <div className="terms-container">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            I agree to the <a href="/terms">Terms & Conditions</a>
          </label>
        </div>

        <button type="submit">Login</button>

        <p className="login-help-text">Or login with your credentials</p>

        <div className="forgot-container">
          <a href="/reset-password">Forgot Password?</a>
        </div>

        <div className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
