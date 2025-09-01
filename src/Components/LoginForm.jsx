import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
    if (role === "student") navigate("/Student-Dashboard");
    else if (role === "teacher") navigate("/Teacher/TeacherDashboard");
    
  } else {
    alert("Enter correct details");
  }
};
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);

  ;

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
